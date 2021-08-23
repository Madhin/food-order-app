import React, {useContext} from 'react'
import { CartContext } from '../../../store/CartProvider';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import styles from './CartButton.module.scss'

const CartButton = (props) => {
 const UseCartContext = useContext(CartContext)
 const numberOfItems = UseCartContext.items.reduce((currentNum, item) => {
   return currentNum + item.amount
 }, 0);


  return (
    <button className = {styles.button} onClick = {props.onClick}> 
      <span className = {styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className ={styles.badge}>
        {numberOfItems}
      </span>
    </button>
  )
}

export default CartButton;
