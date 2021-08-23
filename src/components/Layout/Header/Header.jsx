import React, { Fragment } from 'react'
import styles from './Header.module.scss'
import foodImage from '../../../assets/hussains.jpg'
import CartButton from '../CartButton/CartButton'

const Header = (props) => {
  return <>
    <header className= {styles.header}>
    <h1 className = {styles.name}>hussains</h1>
     <CartButton  onClick ={props.onShowCart}/>
    </header>
    <div className = {styles.foodimage}>
      <img src = {foodImage} alt = "Food"/>
    </div>
    </> 
}

export default Header
