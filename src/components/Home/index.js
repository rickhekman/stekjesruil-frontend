import React from 'react'
import { withTranslation } from 'react-i18next';

function Home(props) {

  const { t } = props

  return (
    <div className="u-center-text">
      <img src={require('../../img/stekjesruil-02.jpg')} alt="homephoto" />
      <h2 className="heading--home-subtitle">{t('home.subtitle')}</h2>
    </div>
  )
}

export default withTranslation()(Home)
