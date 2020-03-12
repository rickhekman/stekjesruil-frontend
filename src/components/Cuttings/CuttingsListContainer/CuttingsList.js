import React from 'react';
// import { Link } from 'react-router-dom';

export default function CuttingsList(props) {
  console.log('CUTTINGS PROPS', props)
  return (
    <div>
      <ul>
        {props.cuttings.cuttingsList
          ? props.cuttings.cuttingsList.map(
            cutting =>
              <div key={cutting.id}>
                <h1>{cutting.name}</h1>
                <img src={cutting.photo} alt={cutting.name} />
              </div>

          )
          : 'Loading cuttings...'
        }
      </ul>
    </div>
  )
}
