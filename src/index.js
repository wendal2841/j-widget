import React from 'react'
import ReactDOM from 'react-dom'

import './teleporthq/style.css'
import Home from './teleporthq/pages/home'

const App = () => {
  return (
    <Home/>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

