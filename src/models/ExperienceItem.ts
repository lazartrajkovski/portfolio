export interface ExperienceItem {
  name: string
  role: string
  workMode: 'Remote' | 'Hybrid' | 'On-site'
  joinDate: string
  endDate: string
  stack: readonly string[]
  highlights: readonly string[]
}
