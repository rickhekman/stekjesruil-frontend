import React from 'react'
import { useTranslation } from 'react-i18next';

function Home() {

  const { t } = useTranslation();

  return (
    <div className="u-center-text">
      <img src={require('../../img/stekjesruil-02.jpg')} alt="homephoto" />
      <h2 className="heading--home-subtitle">{t('home.subtitle')}</h2>
    </div>
  )
}

export default Home;
