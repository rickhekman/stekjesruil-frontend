import React from 'react'
import { withTranslation } from 'react-i18next';

function About(props) {

  const { t } = props

  return (
    <div className="aboutcontainer">
      <div className="aboutcontainer--photo">
        <br />
        <img src={require('../../img/stekjesruil.jpg')} alt="stekjesruil" />
      </div>
      <div className="aboutcontainer--description">
        <p>{t('about.description')}</p>
      </div>
    </div>
  )
}

export default withTranslation()(About)
