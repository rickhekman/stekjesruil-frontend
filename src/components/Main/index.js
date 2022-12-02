import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../../components/About';
import Events from '../Events/EventsListContainer';
import EventDetails from '../Events/EventDetailsContainer';
import CreateEventContainer from '../Events/CreateEventContainer';
import SignupContainer from '../Users/SignupContainer';
import LoginContainer from '../Users/LoginContainer';
import Cuttings from '../Cuttings/CuttingsListContainer';
import CuttingDetails from '../Cuttings/CuttingDetailsContainer';
import CreateCutting from '../Cuttings/CreateCuttingContainer';
import Home from '../Home';

function Main() {
  return (
    <div className="maincolumn">

      <div className="home">
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </div>

      <div className="events">
        <Routes>
          <Route path="/events/" exact component={Events} />

          <Route path="/events/:id" exact component={EventDetails} />

          <Route path="/create-event/" exact component={CreateEventContainer} />
        </Routes>
      </div>

      <div className="cuttings">
        <Routes>
          <Route path="/cuttings/" exact component={Cuttings} />
          <Route path="/cuttings/:id" exact component={CuttingDetails} />
          <Route path="/create-cutting/" exact component={CreateCutting} />
        </Routes>
      </div>

      <div className="about">
        <Routes>
          <Route path="/about/" exact component={About} />
        </Routes>
      </div>

      <div className="users">
        <Routes>
          <Route path="/signup/" exact component={SignupContainer} />
          <Route path="/login/" exact component={LoginContainer} />
        </Routes>
      </div>


    </div>
  )
}

export default Main;
