export type Route =
  | { name: 'home' }
  | { name: 'project'; id: string }
  | { name: 'notfound' }

export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || '/'
  }
  return pathname
}

export function parseRoute(pathname = window.location.pathname): Route {
  const path = stripBase(pathname).replace(/\/$/, '') || '/'
  if (path === '/') return { name: 'home' }
  const match = path.match(/^\/projects\/([^/]+)$/)
  if (match) return { name: 'project', id: decodeURIComponent(match[1]) }
  return { name: 'notfound' }
}

export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${base}${clean}`
}

export function navigate(path: string): void {
  const clean = path.startsWith('/') ? path : `/${path}`
  const url = href(clean)
  if (`${window.location.pathname}${window.location.search}` !== url) {
    history.pushState({}, '', url)
  }
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function bindLinks(root: HTMLElement): void {
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null
    const anchor = target?.closest('a[data-link]') as HTMLAnchorElement | null
    if (!anchor) return
    event.preventDefault()
    navigate(stripBase(new URL(anchor.href).pathname) || '/')
  })
}
