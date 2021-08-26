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

  const nameInputRef = useRef();
  const roadInputRef = useRef();
  const cityInputRef = useRef();
  const postcodeInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredRoad = roadInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostcode = postcodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredRoadIsValid = !isEmpty(enteredRoad)
    const enteredCityIsValid = !isEmpty(enteredCity)
    const enteredPostcodeIsValid = !isEmpty(enteredPostcode)

    setFormInputValid({
      name: enteredNameIsValid,
      road: enteredRoadIsValid,
      city: enteredCityIsValid,
      postcode: enteredPostcodeIsValid
    })

    const formIsValid = enteredNameIsValid && 
    enteredRoadIsValid && enteredCityIsValid && 
    enteredPostcodeIsValid

    if (!formIsValid) {
      return 
    }
      props.onSubmit({
        name: enteredName,
        road: enteredRoad,
        city: enteredCity,
        postcode: enteredPostcode
      });
  };
  
  return (
      <form onSubmit={confirmHandler} >
        <div className = {styles.control}>
        <label htmlFor ='name'>
          Your Name
        </label>
        <input type = 'text' id= 'name' ref = {nameInputRef} required/>
        </div>
        <div className = {styles.control}>
        <label htmlFor ='road'>
          Road Name
        </label>
        <input type = 'text' id= 'road' ref = {roadInputRef} required />
        </div>
        <div className = {styles.control}>
        <label htmlFor ='city'>
          City
        </label>
        <input type = 'text' id= 'city' ref = {cityInputRef} required/>
        </div>
        <div className = {styles.control}>
        <label htmlFor ='postcode'>
          Postcode
        </label>
        <input type = 'text' id= 'postcode' ref = {postcodeInputRef} required/>
        </div>
        <div className = {styles.actions}>
        <button type ='button' onClick={props.onCancel}>Cancel</button>
        <button className = {styles.submit}>Confirm</button>
        </div>
      </form>
  )
}

export default Checkout
