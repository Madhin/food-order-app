import { classes } from 'istanbul-lib-coverage'
import React from 'react'
import Modal from '../../UI/Modal/Modal'
import styles from './Cart.module.scss'

const Cart = (props) => {
  const cartItems = <ul className = {styles.cartitems}>{[{id: "c1", name: "Chicken Tikka Biryani", amount: 2, price: 11.95}].map(item => <li>{item.name}</li>)}</ul>
  
  return (
    <Modal>
      {cartItems}
      <div className = {styles.total}>
        <span>
          Total Amount
        </span>
        <span>
          £35.62
        </span>
      </div>
      <div className = {styles.actions}>
        <button className = {styles.buttonalt}>Close</button>
        <button className = {classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
