import React, { Fragment } from 'react'
import styles from './Header.module.scss'
import foodImage from '../../../assets/restaurant.JPG'
import CartButton from '../CartButton/CartButton'
import HeaderCart from '../HeaderCart/HeaderCart'

const Header = (props) => {
  return <>
    <header className= {styles.header}>
    <h1 className = {styles.name}>hussains</h1>
     <HeaderCart  onClick ={props.onShowCart}/>
    </header>
    <div className = {styles.foodimage}>
      <img src = {foodImage} alt = "Food"/>
    </div>
    </> 
}

export default Header
