import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { CartIcon } from './icons';
import { logout } from '../utils/xhr';

import styles from './StoreHeader.module.scss';

const StoreHeader = () => {
  const { itemCount } = useContext(CartContext);
  let isLogout = false;
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to='/'>Store</NavLink>
        <NavLink to='/cart'><CartIcon /> Cart ({itemCount})</NavLink>
        <NavLink
          onClick={
            () => {
              logout().then(() => {
                isLogout = true;
              })
            }}
          to={isLogout ? '/auth/login' : ''}>Logout</NavLink>
      </nav>
    </header>
  );
}

export default StoreHeader;