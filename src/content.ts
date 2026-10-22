import { marked } from 'marked'
import type { ProjectMeta, ReleaseEntry } from './types'
import projectsJson from '../data/projects.json'
import musicDownloaderReleases from '../data/releases/music-downloader.json'
import fortuneReleases from '../data/releases/fortune.json'

const markdownModules = import.meta.glob('../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const releasesById: Record<string, ReleaseEntry[]> = {
  'music-downloader': musicDownloaderReleases as ReleaseEntry[],
  fortune: fortuneReleases as ReleaseEntry[],
}

export const projects = projectsJson as ProjectMeta[]

export function getProject(id: string): ProjectMeta | undefined {
  return projects.find((p) => p.id === id)
}

export function getProjectBodyHtml(id: string): string | null {
  const key = Object.keys(markdownModules).find((path) => path.endsWith(`/${id}.md`))
  if (!key) return null
  const raw = markdownModules[key]
  return marked.parse(raw, { async: false }) as string
}

export function getProjectReleases(project: ProjectMeta): ReleaseEntry[] {
  if (!project.releasesId) return []
  return releasesById[project.releasesId] ?? []
}
