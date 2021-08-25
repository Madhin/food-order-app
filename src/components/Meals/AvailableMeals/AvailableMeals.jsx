import React, {useEffect, useState} from 'react'
import styles from './AvailableMeals.module.scss'
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';


const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://hussains-46374-default-rtdb.firebaseio.com/Menu.json');
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json();
      console.log(responseData)
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].Name,
          description: responseData[key].Description,
          price: responseData[key].Price,
        });
      }
      setMeals(loadedMeals);
      setLoading(false);
    };
  
      fetchMeals().catch ((error) => {
      setLoading(false);
      setError(error.message)
      });
  }, []);

  console.log(meals)

  if (loading) {
    return( <section className ={styles.loading}>
      <p>Loading...</p>
    </section>
    );
  }

  if (error) {
    return <section className = {styles.error}>
    <p>Failed to fetch</p>
  </section>
  }

  const mealsList = meals.map((meal) => <MealItem 
    key = {meal.id} 
    id = {meal.id}
    name = {meal.name} 
    description = {meal.description} 
    price = {meal.price} />)
  return (
    <section className = {styles.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
