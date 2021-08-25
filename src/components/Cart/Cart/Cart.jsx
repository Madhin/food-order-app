
import React, { useContext, useState } from 'react'
import { CartContext } from '../../../store/CartProvider'
import Checkout from '../../Checkout/Checkout'
import Modal from '../../UI/Modal/Modal'
import styles from './Cart.module.scss'
import CartItem from './CartItem'

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false)
  const cartCtx = useContext(CartContext)
  const cartItemRemoveHandler = id => {cartCtx.removeItem(id)};
  const cartItemAddHandler = item => {cartCtx.addItem({...item, amount: 1})};
  const cartItems = <ul className = {styles.cartitems}>{cartCtx.items.map(item => <CartItem key ={item.id} name ={item.name} amount = {item.amount} price = {item.price} onRemove = {cartItemRemoveHandler.bind(null, item.id)} onAdd = {cartItemAddHandler.bind(null, item)}/>)}</ul>
  const orderHandler = () => {
    setCheckout(true)
  }
  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;
  const modalAction = <div className = {styles.actions}>
  <button className = {styles.buttonalt} onClick = {props.onClose}>Close</button>
  {hasItems && <button className = {styles.button} onClick={orderHandler}>Order</button>}
</div>

  
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
      {checkout && <Checkout onCancel = {props.onClose}/>}
      {!checkout && modalAction}
      
    </Modal>
  )
}

export default Cart
