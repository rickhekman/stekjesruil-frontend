import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
// import SelectLanguage from './SelectLanguage'

class Navigation extends Component {
  render() {

    const { t, i18n } = this.props

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div>
        <div>
          <nav>
            {/* <SelectLanguage /> */}

            <nav>
              <button onClick={() => changeLanguage('en')} className="btn btn--yellow">EN</button>
            </nav>
            <nav>
              <button onClick={() => changeLanguage('nl')} className="btn btn--yellow">NL</button>
            </nav>

          </nav>

          <nav>
            <Link to="/events/"><button className="btn btn--yellow">{t('navigation.events')}</button></Link>
            <Link to="/cuttings/"><button className="btn btn--yellow">{t('navigation.cuttings')}</button></Link>
            <Link to="/about/"><button className="btn btn--yellow">{t('navigation.about')}</button></Link>
            <Link to="/signup/"><button className="btn btn--yellow">{t('navigation.signup')}</button></Link>
            <Link to="/login/"><button className="btn btn--yellow">{t('navigation.login')}</button></Link>

          </nav>
        </div>

      </div>
    )
  }
}


export default withTranslation()(Navigation)
