import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class About extends Component {
  render() {

    console.log('this props about test', this.props)
    const { t } = this.props

    return (
      <div>
        <div className="about">
          <div>
            <h1>{t('about.title')}</h1>
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