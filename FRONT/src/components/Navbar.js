import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LibraryShop
            <i class='fab fa-typo3' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                <div class="demo-2">
                  <form class="form-search">
                    <div class="input-group">
                      <input class="form-control form-text" maxlength="128" placeholder="Buscar" size="15" type="text" />
                      <span class="input-group-btn"><button class="btn btn--outline"><i class="fa fa-search fa-lg">&nbsp;</i></button></span>
                    </div>
                  </form>
                </div>

              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Cuenta
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/deseos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Deseos
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Ingreso/Registro
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Ingreso/Registro</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
