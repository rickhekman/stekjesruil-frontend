import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'
import { withTranslation } from 'react-i18next';

class Header extends Component {
  render() {

    const { t } = this.props

    return (
      <div>
        <div>
          <Link to="/"><h1 className="heading--primary">{t('main-title')}</h1></Link>
        </div>

        <div>
          <Navigation />
        </div>

      </div>
    )
  }
}

export default withTranslation()(Header)