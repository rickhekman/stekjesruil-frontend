import React from 'react';
import { Route } from 'react-router-dom';
import About from '../../components/About';
import Events from '../Events/EventsListContainer';
import EventDetails from '../Events/EventDetailsContainer';
import CreateEventContainer from '../Events/CreateEventContainer';
import SignupContainer from '../Users/SignupContainer';
import LoginContainer from '../Users/LoginContainer';
import Cuttings from '../Cuttings/CuttingsListContainer';
import CuttingDetails from '../Cuttings/CuttingDetailsContainer';

function Main() {
  return (
    <div>
      <Route path="/about/" exact component={About} />
      <Route path="/events/" exact component={Events} />
      <Route path="/events/:id" exact component={EventDetails} />
      <Route path="/create-event/" exact component={CreateEventContainer} />
      <Route path="/signup/" exact component={SignupContainer} />
      <Route path="/login/" exact component={LoginContainer} />
      <Route path="/cuttings/" exact component={Cuttings} />
      <Route path="/cuttings/:id" exact component={CuttingDetails} />
    </div>
  )
}


export default Main