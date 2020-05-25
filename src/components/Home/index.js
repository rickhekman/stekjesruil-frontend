import React from 'react'
// import { useTranslation } from 'react-i18next';
import Slider from '../Slider'

function Home() {

  // const { t } = useTranslation();

  return (
    <div className="u-center-text">
      {/* <h2 className="heading--home-subtitle">{t('home.subtitle')}</h2> */}
      <Slider />
    </div>
  )
}

export default Home;
