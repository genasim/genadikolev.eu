import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Layout from './Layout'
import pages from './pages'
import theme from './scss/_variables.module.scss'
import './scss/index.scss'

function App() {
  return (
    <div className='bg-dark text-white'>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Routes>
              {pages.map(page => (
                <Route
                  key={page.path}
                  path={page.path}
                  Component={page.component}
                />
              ))}
            </Routes>
          </Router>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App
