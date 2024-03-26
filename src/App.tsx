import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import ScreenImageLayout from './Layout'
import pages from './pages'
import theme from './scss/_variables.module.scss'
import './scss/index.scss'
import uuid from 'react-uuid'

function App() {
  return (
    <div className="bg-dark text-white">
      <ThemeProvider theme={theme}>
        <Router>
          <ScreenImageLayout>
            <Routes>
              {pages.map(page => (
                <Route
                  key={uuid()}
                  path={page.path}
                  element={ <page.component />}
                />
              ))}
            </Routes>
          </ScreenImageLayout>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
