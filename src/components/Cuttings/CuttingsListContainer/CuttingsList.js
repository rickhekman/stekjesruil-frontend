import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CuttingsList(props) {

  const { t } = useTranslation();

  return (
    <div className="cuttings--list">

      {props.cuttings.cuttingsList
        ? props.cuttings.cuttingsList.map(
          cutting => <Link to={`/cuttings/${cutting.id}`}
            style={{
              textDecoration: 'none'
            }} key={cutting.id}>
            <div className="cutting u-center-text">
              <p className="cutting--name">{cutting.name}</p>
              <img src={cutting.photo} alt={cutting.name} className="cutting--photo" />
            </div>
          </Link>
        )
        : 'Loading cuttings...'
      }

      <div className="cuttings--list__button">
        <Link to={`/create-cutting/`}><button className="btn btn--form-blue">{t('cutting.create')}</button></Link>
      </div>
    </div>


  )
}

export default CuttingsList
