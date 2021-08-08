import React from 'react'
import styles from './MealForm.module.scss'
import Input from '../../UI/Input/Input'


const MealForm = (props) => {
  return (
   <form className = {styles.form}>
     <Input label = "Amount" input = {{
       id: 'amount',
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
