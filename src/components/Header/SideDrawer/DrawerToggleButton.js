import React from 'react';

function DrawerToggleButton(props) {

  return (
    <button className="nav-button" onClick={props.click}>
      <span className="nav-button__line" />
      <span className="nav-button__line" />
      <span className="nav-button__line" />
    </button>
  );
}

export default DrawerToggleButton;
