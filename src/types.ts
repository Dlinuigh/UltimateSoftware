export type ProjectMeta = {
  id: string
  name: string
  tagline: string
  platforms: string[]
  version: string | null
  public: boolean
  repo: string | null
  release: string | null
  demo: string | null
  /** Key under data/releases/<id>.json */
  releasesId?: string | null
}

export type ReleaseAsset = {
  name: string
  url: string
  size: number
}

export type ReleaseEntry = {
  tag: string
  name: string
  url: string
  published: string
  assets: ReleaseAsset[]
}
