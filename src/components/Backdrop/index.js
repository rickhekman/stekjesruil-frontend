import React from 'react';

function Backdrop(props) {

  return (
    <div className="backdrop" onClick={props.click} />
  )
}

export default Backdrop;
