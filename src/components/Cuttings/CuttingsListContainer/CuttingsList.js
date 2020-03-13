import React from 'react';
import { Link } from 'react-router-dom';

export default function CuttingsList(props) {

  return (
    <div>
      <div>
        <div>
          <Link to={`/create-cutting/`}><button className="btn btn--yellow">Post your cutting</button></Link>
        </div>
      </div>
      <div>
        <ul>
          {props.cuttings.cuttingsList
            ? props.cuttings.cuttingsList.map(
              cutting => <Link to={`/cuttings/${cutting.id}`}
                style={{
                  textDecoration: 'none'
                }} key={cutting.id}>
                <div key={cutting.id}>
                  <h1>{cutting.name}</h1>
                  <img src={cutting.photo} alt={cutting.name} />
                </div>
              </Link>
            )
            : 'Loading cuttings...'
          }
        </ul>
      </div>
    </div>
  )
}
