import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import Navigation from '../Navigation'
import { withTranslation } from 'react-i18next';

class Header extends Component {
  render() {

    const { t, i18n } = this.props

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div>
        <div>
          <Link to="/" style={{
            textDecoration: 'none'
          }}>
            <h1 className="heading--primary"
            >
              {t('main-title')}
            </h1>
          </Link>
        </div>

        {/* <div className="navigation">
          <Navigation />
        </div> */}
        <div className="navigation__sub">
          <div className="languages">
            {/* <SelectLanguage /> */}
            <nav>
              <button onClick={() => changeLanguage('en')} className="btn btn--yellow">EN</button>
            </nav>
            <nav>
              <button onClick={() => changeLanguage('nl')} className="btn btn--yellow">NL</button>
            </nav>
          </div>
        </div>

      </div>
    )
  }
}

export default withTranslation()(Header)
