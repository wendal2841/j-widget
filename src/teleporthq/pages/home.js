import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>j-widget</title>
        <meta property="og:title" content="j-widget" />
      </Helmet>
    </div>
  )
}

export default Home
