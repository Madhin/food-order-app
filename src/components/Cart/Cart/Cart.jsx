import { classes } from 'istanbul-lib-coverage'
import React, { useContext } from 'react'
import { CartContext } from '../../../store/CartProvider'
import Modal from '../../UI/Modal/Modal'
import styles from './Cart.module.scss'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const cartItemRemoveHandler = id => {};
  const cartItemAddHandler = item => {};
  const cartItems = <ul className = {styles.cartitems}>{cartCtx.items.map(item => <CartItem key ={item.id} name ={item.name} amount = {item.amount} price = {item.price} onRemove = {cartItemRemoveHandler.bind(null, item.id)} onAdd = {cartItemAddHandler.bind(null, item)}/>)}</ul>
  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;

  
  return (
    <Modal onClose = {props.onClose}>
      {cartItems}
      <div className = {styles.total}>
        <span>
          Total Amount
        </span>
        <span>
          {totalAmount}
        </span>
      </div>
      <div className = {styles.actions}>
        <button className = {styles.buttonalt} onClick = {props.onClose}>Close</button>
        {hasItems && <button className = {classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
