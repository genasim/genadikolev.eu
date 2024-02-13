import './scss/index.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import pages from './pages'
import Layout from './Layout'

function App() {
  return (
    <div className="bg-dark">
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
    </div>
  )
}

export default App
