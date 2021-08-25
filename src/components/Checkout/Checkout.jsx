import React from 'react'
import styles from './Checkout.module.scss'

const Checkout = (props) => {
  return (
      <form>
        <div className = {styles.control}>
        <label htmlFor ='name'>
          Your Name
        </label>
        <input type = 'text' id= 'name' />
        </div>
        <div className = {styles.control}>
        <label htmlFor ='road'>
          Road Name
        </label>
        <input type = 'text' id= 'road' />
        </div>
        <div className = {styles.control}>
        <label htmlFor ='city'>
          City
        </label>
        <input type = 'text' id= 'city' />
        </div>
        <div className = {styles.control}>
        <label htmlFor ='postcode'>
          Postcode
        </label>
        <input type = 'text' id= 'postcode' />
        </div>
        <button type ='button' onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
      </form>
  )
}

export default Checkout
