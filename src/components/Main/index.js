import React from 'react';
import { Route } from 'react-router-dom';
import About from '../../components/About';
import Events from '../Events/EventsListContainer';
import EventDetails from '../Events/EventDetailsContainer';
import CreateEventContainer from '../Events/CreateEventContainer'


function Main() {
  return (
    <div>
      <Route path="/about/" exact component={About} />
      <Route path="/events/" exact component={Events} />
      <Route path="/events/:id" exact component={EventDetails} />
      <Route path="/create-event/" exact component={CreateEventContainer} />
    </div>
  )
}


export default Main