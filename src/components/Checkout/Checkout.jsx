import React, {useRef, useState} from 'react'
import styles from './Checkout.module.scss'

const isEmpty = value => value.trim() === '';
const Checkout = (props) => {

  const [formInputValid, setFormInputValid] = useState({
    name: true,
    road: true,
    city: true, 
    postcode: true
  });

 
  const confirmHandler = (e) => {
    e.preventDefault();
    }
  
  
  return (
      <form onSubmit={confirmHandler} >
        <div className = {styles.control}>
        <label htmlFor ='name'>
          Your Name
        </label>
        <input type = 'text' id= 'name' required/>
        </div>
        <div className = {styles.control}>
        <label htmlFor ='road'>
          Road Name
        </label>
        <input type = 'text' id= 'road'  required />
        </div>
        <div className = {styles.control}>
        <label htmlFor ='city'>
          City
        </label>
        <input type = 'text' id= 'city' required/>
        </div>
        <div className = {styles.control}>
        <label htmlFor ='postcode'>
          Postcode
        </label>
        <input type = 'text' id= 'postcode' required/>
        </div>
        <div className = {styles.actions}>
        <button type ='button' onClick={props.onCancel}>Cancel</button>
        <button className = {styles.submit}>Confirm</button>
        </div>
      </form>
  )
}

export default Checkout
