import React from 'react'
import { Route } from 'react-router-dom'
import About from '../../components/About'
import Events from '../Events/EventsListContainer'

function Main() {
  return (
    <div>
      <Route path="/about/" exact component={About} />
      <Route path="/events/" exact component={Events} />
    </div>
  )
}


export default Main