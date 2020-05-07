import React from 'react';

function DrawerToggleButton(props) {

  return (
    <div>
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />
      <label className="navigation__button" for="nav-toggle" onClick={props.click}>
        <span className="navigation__line" />
      </label>
    </div>

  );
}

export default DrawerToggleButton;
