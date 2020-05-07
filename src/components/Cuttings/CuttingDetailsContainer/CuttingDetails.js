import React from 'react';
import { useTranslation } from 'react-i18next';

function CuttingDetails(props) {

  const { cutting } = props

  const { t } = useTranslation()

  return (
    <div>
      {cutting
        ? <div>
          <h1>{cutting.name}</h1>
          <img src={cutting.photo} alt={cutting.name} />
          <p>{cutting.description}</p>

          <button type="button" onClick={props.onDelete}>{t('cutting.delete')}</button>
        </div>
        : 'Cutting details are loading...'
      }
    </div>
  )
}

export default CuttingDetails
