import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class About extends Component {
  render() {

    const { t } = this.props

    return (
      <div>
        <div className="about">
          <div>
            <br />
            <img src={require('../../img/stekjesruil.jpg')} alt="stekjesruil" />
          </div>
          <div className="about--description">
            <p>{t('about.description')}</p>
          </div>
        </div>

      </div>
    )
  }
}


export default withTranslation()(About)
