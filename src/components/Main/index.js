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
import CreateCutting from '../Cuttings/CreateCuttingContainer';

function Main() {
  return (
    <div>
      <div>
        <Route path="/events/" exact component={Events} />
        <Route path="/events/:id" exact component={EventDetails} />
        <Route path="/create-event/" exact component={CreateEventContainer} />
      </div>
      <div>
        <Route path="/cuttings/" exact component={Cuttings} />
        <Route path="/cuttings/:id" exact component={CuttingDetails} />
        <Route path="/create-cutting/" exact component={CreateCutting} />
      </div>
      <div>
        <Route path="/about/" exact component={About} />
      </div>
      <div>
        <Route path="/signup/" exact component={SignupContainer} />
        <Route path="/login/" exact component={LoginContainer} />
      </div>
    </div>
  )
}


export default Main
