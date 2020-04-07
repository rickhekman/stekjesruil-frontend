import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
// import SelectLanguage from './SelectLanguage'

class Navigation extends Component {
  render() {

    const { t } = this.props


    return (
      <div>
        <div className="navigation__main">
          <nav>
            <Link to="/events/"><button className="btn btn--green">{t('navigation.events')}</button></Link>
            <Link to="/cuttings/"><button className="btn btn--green">{t('navigation.cuttings')}</button></Link>
            <Link to="/about/"><button className="btn btn--green">{t('navigation.about')}</button></Link>
          </nav>

          <div className="navigation__user">
            <Link to="/signup/"><button className="btn btn--green">{t('navigation.signup')}</button></Link>
            <Link to="/login/"><button className="btn btn--green">{t('navigation.login')}</button></Link>
          </div>

        </div>

      </div>
    )
  }
}


export default withTranslation()(Navigation)
