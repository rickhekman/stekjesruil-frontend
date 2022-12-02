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
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <div className="events">
        <Routes>
          <Route path="/events/" element={<Events />} />
          <Route path="/events/:id"  element={<EventDetails />} />
          <Route path="/create-event/"  element={<CreateEventContainer />} />
        </Routes>
      </div>

      <div className="cuttings">
        <Routes>
          <Route path="/cuttings/"  element={<Cuttings />} />
          <Route path="/cuttings/:id" element={<CuttingDetails />} />
          <Route path="/create-cutting/" element={<CreateCutting />} />
        </Routes>
      </div>

      <div className="about">
        <Routes>
          <Route path="/about/" element={<About />} />
        </Routes>
      </div>

      <div className="users">
        <Routes>
          <Route path="/signup/" element={<SignupContainer />} />
          <Route path="/login/"  element={<LoginContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default Main;
