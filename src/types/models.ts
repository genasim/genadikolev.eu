export interface ProjectModel {
  image?: string
  title?: string
  text?: string
  links?: { text: string; href: string }[]
  tags?: string[]
}
