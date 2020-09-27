import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { CartIcon } from './icons';
import styles from './StoreHeader.module.scss';

const StoreHeader = () => {
  const {itemCount} = useContext(CartContext);
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to='/'>Store</NavLink>
        <NavLink to='/cart'><CartIcon /> Cart ({itemCount})</NavLink>
      </nav>
    </header>
  );
}

export default StoreHeader;