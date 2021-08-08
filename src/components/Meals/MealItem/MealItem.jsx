import React from 'react'
import MealForm from '../MealForm.jsx/MealForm';
import styles from './MealItem.module.scss'

const MealItem = (props) => {
  const price = `£${props.price.toFixed(2)}`;
  return (
    <li className = {styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className = {styles.description}>{props.description}</div>
        <div className = {styles.price}>{price}</div>
      </div>
      <div>
        <MealForm id = {props.id} />
      </div>
    </li>
  )
}

export default MealItem
