import React, {useContext} from 'react'
import { CartContext } from '../../../store/CartProvider';
import MealForm from '../MealForm.jsx/MealForm';
import styles from './MealItem.module.scss'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `£${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className = {styles.meal}>
      <div>
        <h3 className = {styles.name}>{props.name}</h3>
        <div className = {styles.description}>{props.description}</div>
        <div className = {styles.price}>{price}</div>
      </div>
      <div>
        <MealForm id = {props.id} onAddToCart = {addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
