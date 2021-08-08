import React from 'react'
import AvailableMeals from '../AvailableMeals/AvailableMeals'
import MealsSummary from '../MealsSummary/MealsSummary'

const Meals = () => {
  return (
    <div>
      <MealsSummary />
      <AvailableMeals />
    </div>
  )
}

export default Meals
