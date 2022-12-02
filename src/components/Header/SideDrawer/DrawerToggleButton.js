import React from 'react';

function DrawerToggleButton(props) {

  return (
    <div>
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" onClick={props.click} checked={props.check} onChange={props.handler} />
      <label className="navigation__button" htmlFor="nav-toggle">
        <span className="navigation__line" />
      </label>
    </div>

  );
}

export default DrawerToggleButton;
