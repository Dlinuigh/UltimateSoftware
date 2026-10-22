import { marked } from 'marked'
import type { ProjectMeta } from './types'
import projectsJson from '../data/projects.json'

const markdownModules = import.meta.glob('../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

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
