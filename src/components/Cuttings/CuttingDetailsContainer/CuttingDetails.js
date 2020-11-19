import React from 'react';
// import { useTranslation } from 'react-i18next';

function CuttingDetails(props) {

  const { cutting } = props

  // const { t } = useTranslation()

  return (
    <div>
      {cutting
        ? <div className="cutting-details">
          <h1 className="cutting-details__title">{cutting.name}</h1>
          <img src={cutting.photo} alt={cutting.name} className="cutting-details__photo" />
          <p className="cutting-details__description">{cutting.description}</p>
          {/* <button type="button" onClick={props.onDelete} className="cutting-details__delete-button">{t('cutting.delete')}</button> */}
        </div>
        : 'Cutting details are loading...'
      }
    </div>
  )
}

export default CuttingDetails
