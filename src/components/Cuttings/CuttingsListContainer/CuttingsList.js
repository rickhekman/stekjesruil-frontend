import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function CuttingsList(props) {

  const { t } = props;

  return (
    <div>
      <div>
        <div>
          <Link to={`/create-cutting/`}><button className="btn btn--yellow">{t('cutting.create')}</button></Link>
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

export default withTranslation()(CuttingsList)
