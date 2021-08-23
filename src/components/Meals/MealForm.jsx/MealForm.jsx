import React from 'react'
import styles from './MealForm.module.scss'
import Input from '../../UI/Input/Input'


const MealForm = (props) => {
  const submitHandler = event => {
    event.preventDefault();
  };

  
  return (
   <form className = {styles.form}>
     <Input label = "Amount" input = {{
       id: 'amount_' + props.id,
       type: 'number',
       min: '1',
       max: '5',
       step: '1',
       defaultValue: '1'
     }}/>
     <button>+ Add</button>
   </form>

  )
}

export default MealForm
