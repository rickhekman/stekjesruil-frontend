import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function CuttingsList(props) {

  const { t } = props;

  return (
    <div className="cuttingslist">
      <div className="cuttingslist__button">
        <Link to={`/create-cutting/`}><button className="btn btn--form-blue">{t('cutting.create')}</button></Link>
      </div>
      <div className="cuttingslist__content">
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
