import React from 'react'
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function SideDrawer(props) {

  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  const { t } = props

  return (<div className={drawerClasses}>
    <div className="navigation">
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item" onClick={props.click}>
            <Link to="/events/" style={{ textDecoration: 'none' }} className="navigation__link">
              {t('navigation.events')}
            </Link>
          </li>
          <li className="navigation__item" onClick={props.click}>
            <Link to="/cuttings/" style={{ textDecoration: 'none' }} className="navigation__link">
              {t('navigation.cuttings')}
            </Link>
          </li>
          <li className="navigation__item" onClick={props.click}>
            <Link to="/about/" style={{ textDecoration: 'none' }} className="navigation__link">
              {t('navigation.about')}
            </Link>
          </li>
          <li className="navigation__item" onClick={props.click}>
            <Link to="/signup/" style={{ textDecoration: 'none' }} className="navigation__link">
              {t('navigation.signup')}
            </Link>
          </li>
          <li className="navigation__item" onClick={props.click}>
            <Link to="/login/" style={{ textDecoration: 'none' }} className="navigation__link">
              {t('navigation.login')}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>)

};

export default withTranslation()(SideDrawer);
