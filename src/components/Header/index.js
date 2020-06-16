import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer';
import Backdrop from '../../components/Backdrop';

function Header() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);
  const { t, i18n } = useTranslation();

  const openHandler = () => {
    if (!sideDrawerOpen) {
      setSideDrawerOpen(true)
    } else {
      setSideDrawerOpen(false)
    }
  };

  const closeHandler = () => {
    setSideDrawerOpen(false)
    setCheckBoxChecked(false)
  };

  const checkBoxHandler = () => {
    if (!checkBoxChecked) {
      setCheckBoxChecked(true)
    } else {
      setCheckBoxChecked(false)
    }
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
    setCheckBoxChecked(false)
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  };

  const changeLanguage = lng => {
    i18n.changeLanguage(lng.target.value)
  };

  return (
    <div className="header-layout">
      <nav className="header-layout__nav">
        <div>
          <DrawerToggleButton click={openHandler} check={checkBoxChecked} handler={checkBoxHandler} />
          <SideDrawer show={sideDrawerOpen} click={closeHandler} />
          {backdrop}
        </div>
      </nav>

      <div className="header-layout__logo">
        <Link to="/" style={{
          textDecoration: 'none'
        }}>
          <h1 className="heading--primary">
            {t('main-title')}
          </h1>
        </Link>
      </div>

      <div className="header-layout__language">
        <div className="navigation__sub">
          <div className="languages">
            <select onChange={changeLanguage} className="select--language">
              <option className="select--language__option">
                {'Language'}
              </option>
              <option
                key={'Dutch'}
                value={'nl'}
                onChange={changeLanguage}
                className="select--language__option"
              >
                {'Nederlands'}
              </option>
              <option
                key={'English'}
                value={'en'}
                onChange={changeLanguage}
                className="select--language__option"
              >
                {'English'}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;


