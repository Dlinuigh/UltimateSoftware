import './style.css'
import { projects, getProject, getProjectBodyHtml, getProjectReleases } from './content'
import { parseRoute, href, bindLinks } from './router'
import type { ProjectMeta, ReleaseEntry } from './types'

const app = document.querySelector<HTMLDivElement>('#app')!
bindLinks(app)

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function tagsHtml(platforms: string[], version: string | null): string {
  const items = [
    ...platforms.map((p) => `<span class="tag">${escapeHtml(p)}</span>`),
    version ? `<span class="tag">v${escapeHtml(version)}</span>` : '',
  ]
  return `<div class="tags">${items.join('')}</div>`
}

function renderHome(): string {
  const cards = projects
    .map(
      (p) => `
      <a class="card" data-link href="${href(`/projects/${p.id}`)}">
        <h2>${escapeHtml(p.name)}</h2>
        <p>${escapeHtml(p.tagline)}</p>
        ${tagsHtml(p.platforms, p.version)}
      </a>`,
    )
    .join('')

  return `
    <div class="shell">
      <header class="hero">
        <h1 class="brand">Ultimate<span>Software</span></h1>
        <p class="lede">个人软件作品集：工具、播放器与实验项目。</p>
        <div class="hero-cta"><a href="#projects">浏览项目</a></div>
      </header>
      <section id="projects">
        <p class="section-label">Projects</p>
        <div class="grid">${cards}</div>
      </section>
    </div>`
}

function linkButtons(p: ProjectMeta): string {
  const links: string[] = []
  if (p.public && p.repo) {
    links.push(`<a href="${escapeHtml(p.repo)}" target="_blank" rel="noreferrer">源码</a>`)
  }
  if (p.release) {
    links.push(`<a href="${escapeHtml(p.release)}" target="_blank" rel="noreferrer">全部发行</a>`)
  }
  if (p.demo) {
    links.push(`<a href="${escapeHtml(p.demo)}" target="_blank" rel="noreferrer">Demo</a>`)
  }
  if (!links.length) return ''
  return `<div class="links">${links.join('')}</div>`
}

function platformForAsset(name: string): string {
  const lower = name.toLowerCase()
  if (lower.endsWith('.dmg') || lower.includes('macos') || lower.includes('mac')) return 'macOS'
  if (lower.endsWith('.apk') || lower.includes('android')) return 'Android'
  return '文件'
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toISOString().slice(0, 10)
}

function releasesHtml(releases: ReleaseEntry[]): string {
  if (!releases.length) return ''
  const rows = releases
    .map((r) => {
      const assets = r.assets
        .map((a) => {
          const platform = platformForAsset(a.name)
          return `<a class="asset" href="${escapeHtml(a.url)}" target="_blank" rel="noreferrer">
            <span class="asset-platform">${escapeHtml(platform)}</span>
            <span class="asset-name">${escapeHtml(a.name)}</span>
            <span class="asset-size">${escapeHtml(formatSize(a.size))}</span>
          </a>`
        })
        .join('')
      return `<li class="release-item">
        <div class="release-head">
          <a href="${escapeHtml(r.url)}" target="_blank" rel="noreferrer">${escapeHtml(r.name || r.tag)}</a>
          <span class="release-meta">${escapeHtml(r.tag)} · ${escapeHtml(formatDate(r.published))}</span>
        </div>
        <div class="release-assets">${assets || '<span class="muted">无附件</span>'}</div>
      </li>`
    })
    .join('')

  return `
    <section class="releases">
      <h2 class="releases-title">发行版</h2>
      <ul class="release-list">${rows}</ul>
    </section>`
}

function renderProject(id: string): string {
  const project = getProject(id)
  if (!project) return renderNotFound()
  const body = getProjectBodyHtml(id) ?? '<p>暂无说明。</p>'
  const releases = getProjectReleases(project)

  return `
    <div class="shell">
      <nav class="topbar">
        <a class="brand-mini" data-link href="${href('/')}">Ultimate<span>Software</span></a>
        <a class="back" data-link href="${href('/')}">← 全部项目</a>
      </nav>
      <article class="detail">
        <header class="detail-head">
          <div class="meta-row">${tagsHtml(project.platforms, project.version)}</div>
          <h1>${escapeHtml(project.name)}</h1>
          <p class="tagline">${escapeHtml(project.tagline)}</p>
        </header>
        ${linkButtons(project)}
        ${releasesHtml(releases)}
        <div class="prose">${body}</div>
      </article>
    </div>`
}

function renderNotFound(): string {
  return `
    <div class="shell empty">
      <h1>未找到</h1>
      <p><a data-link href="${href('/')}">返回首页</a></p>
    </div>`
}

function render(): void {
  const route = parseRoute()
  if (route.name === 'home') {
    app.innerHTML = renderHome()
    document.title = 'UltimateSoftware'
  } else if (route.name === 'project') {
    app.innerHTML = renderProject(route.id)
    const project = getProject(route.id)
    document.title = project ? `${project.name} · UltimateSoftware` : 'UltimateSoftware'
  } else {
    app.innerHTML = renderNotFound()
    document.title = '未找到 · UltimateSoftware'
  }
}

window.addEventListener('popstate', render)
render()
