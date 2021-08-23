import React, {useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../store/CartProvider';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import styles from './HeaderCart.module.scss';


const HeaderCart = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const {items} = cartCtx;

  const btnStyles = `${styles.button} ${btnHighlighted ? styles.bump: ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
   const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
       <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCart
