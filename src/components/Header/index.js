import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer';
import Backdrop from '../../components/Backdrop';

function Header() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const openHandler = () => {
    if (!sideDrawerOpen) {
      setSideDrawerOpen(true)
    } else {
      setSideDrawerOpen(false)
    }
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  const closeHandler = () => {
    setSideDrawerOpen(false)
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header--container">
      <nav className="header--container__nav">
        <div>
          <DrawerToggleButton click={openHandler} />
          <SideDrawer show={sideDrawerOpen} click={closeHandler} />
          {backdrop}
        </div>
      </nav>

      <div className="header--container__logo">
        <Link to="/" style={{
          textDecoration: 'none'
        }}>
          <h1 className="heading--primary">
            {t('main-title')}
          </h1>
        </Link>
      </div>

      <div className="header--container__language">
        <div className="navigation__sub">
          <div className="languages">
            <nav>
              <button onClick={() => changeLanguage('en')} className="btn btn--grey">English</button>
            </nav>
            <nav>
              <button onClick={() => changeLanguage('nl')} className="btn btn--grey">Dutch</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
