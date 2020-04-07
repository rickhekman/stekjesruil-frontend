import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class About extends Component {
  render() {

    const { t } = this.props

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
}


export default withTranslation()(About)
