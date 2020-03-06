import React from 'react'
import { Route } from 'react-router-dom'
import About from '../../components/About'

function Main() {
  return (
    <div>
      <Route path="/about/" exact component={About} />

    </div>
  )
}


export default Main