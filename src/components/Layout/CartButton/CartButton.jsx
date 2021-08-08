import React from 'react'
import CartIcon from '../../Cart/CartIcon/CartIcon';
import styles from './CartButton.module.scss'

const CartButton = () => {
  return (
    <button className = {styles.button}> 
      <span className = {styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className ={styles.badge}>
        3
      </span>
    </button>
  )
}

export default CartButton;
