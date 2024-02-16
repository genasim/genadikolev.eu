import React from 'react'
import HomePage from './Home'
import SkillsPage from './Skills'
import ProjectsPage from './Projects'
import ResumePage from './Resume'

interface Page {
  component: React.FC
  path: string
  title: string
}

const pages: Page[] = [
  { component: HomePage, path: '/', title: 'Home' },
  { component: SkillsPage, path: '/skills', title: 'Skills' },
  { component: ProjectsPage, path: '/projects', title: 'Projects' },
  { component: ResumePage, path: '/resume', title: 'Resume' },
] as const

export default pages
