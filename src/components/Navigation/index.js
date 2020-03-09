import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class Navigation extends Component {
  render() {

    const { i18n } = this.props

    // console.log('i18n props test', this.props)
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <div>
        <div>
          <nav>
            <button onClick={() => changeLanguage('en')} className="btn btn--yellow">EN</button>
          </nav>
          <nav>
            <button onClick={() => changeLanguage('nl')} className="btn btn--yellow">NL</button>
          </nav>
          <nav>
            <Link to="/events/"><button className="btn btn--yellow">Events</button></Link>
            <Link to="/about/"><button className="btn btn--yellow">About</button></Link>
          </nav>
        </div>

      </div>
    )
  }
}


export default withTranslation()(Navigation)