import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import pages from './pages'

function App() {
  return (
    <div className="bg-dark">
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
    </div>
  )
}

export default App
