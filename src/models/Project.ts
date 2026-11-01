export interface Project {
  name: string
  description: string
  stack: readonly string[]
  codeLink: string
  liveLink?: string
  image?: string
}
