import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Flash Cards</Link>
        </header>
      </div>
    </Router>
  )
}

export default App
