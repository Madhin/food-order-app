
import React, { useContext, useState } from 'react'
import { CartContext } from '../../../store/CartProvider'
import Checkout from '../../Checkout/Checkout'
import Modal from '../../UI/Modal/Modal'
import styles from './Cart.module.scss'
import CartItem from './CartItem'

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false)
  const [submitting, setSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext)
  const cartItemRemoveHandler = id => {cartCtx.removeItem(id)};
  const cartItemAddHandler = item => {cartCtx.addItem({...item, amount: 1})};
  const cartItems = <ul className = {styles.cartitems}>{cartCtx.items.map(item => <CartItem key ={item.id} name ={item.name} amount = {item.amount} price = {item.price} onRemove = {cartItemRemoveHandler.bind(null, item.id)} onAdd = {cartItemAddHandler.bind(null, item)}/>)}</ul>
  const orderHandler = () => {
    setCheckout(true)
  }
  const cancelHandler = () => {
    setCheckout(false)
  }

  const submitOrderHandler = async (userData) => {
    setSubmitting(true);
    const response = await fetch('https://hussains-46374-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user:userData,
        orderedItems: cartCtx.items
      })
    });
    // setSubmitting(false);
    setDidSubmit(true);
  }; 


  const totalAmount = `£${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;
  const modalAction = <div className = {styles.actions}>
  <button className = {styles.buttonalt} onClick = {props.onClose}>Close</button>
  {hasItems && <button className = {styles.button} onClick={orderHandler}>Order</button>}
</div>

  const cartModalContent = 
  <> 
  {cartItems}
  <div className = {styles.total}>
    <span>
      Total Amount
    </span>
    <span>
      {totalAmount}
    </span>
  </div>
  {checkout && <Checkout onSubmit = {submitOrderHandler} onCancel = {cancelHandler}/>}
  {!checkout && modalAction}
</>

const isSubmittingContent = <p>Sending order data...</p>

const didSubmitContent = <>
<p>Successfully sent order!</p>
<div className = {styles.actions}>
  <button className = {styles.button} onClick = {props.onClose}>Close</button>
  </div>
</>

 return (
    <Modal onClose = {props.onClose}>
     {!submitting && cartModalContent}
     {didSubmit && didSubmitContent}
    </Modal>
  )
}

export default Cart
