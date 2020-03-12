import React from 'react';
import { withTranslation } from 'react-i18next';

function CuttingDetails(props) {
  console.log('Cutting props', props)
  const { t, cutting } = props

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

export default withTranslation()(CuttingDetails)
