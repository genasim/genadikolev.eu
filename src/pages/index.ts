import React from 'react'
import HomePage from './Home'
import SkillsPage from './Skills'
import ProjectsPage from './Projects'
import ResumePage from './Resume'

interface Page {
  component: React.FC
  path: string
}

const pages: Page[] = [
  { component: HomePage, path: '/' },
  { component: SkillsPage, path: '/skills' },
  { component: ProjectsPage, path: '/projects' },
  { component: ResumePage, path: '/resume' },
]

export default pages
