import React, {useEffect, useState} from 'react'
import styles from './AvailableMeals.module.scss'
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Tikka Biryani',
    description: 'Traditional festive dish prepared with basmati rice in clarified better with delicate herbs and spices. Served with vegetable curry.',
    price: 11.95,
  },
  {
    id: 'm2',
    name: "Hussain's Bombay Special",
    description: "Chicken or Lamb Tikka cooked with minced lamb, finely chopped onion, capsicum, spices, fresh herbs and potato (medium to hot)",
    price: 8.50,
  },
  {
    id: 'm3',
    name: "Hussain's BBQ Pack",
    description: "Includes: 2x Tandoori Chicken (on the bone), 4x Chicken Tikka, 4x Lamb Chops, 4x Lamb Tikka, 4x Sheek Kebabs & 2x Naan's", 
    price: 29.95,
  },
  {
    id: 'm4',
    name: "Lamb Shanks",
    description: "Marinated lamb shanks slowly cooked overnight, in tomatoes, onion, fresh herbs and spices, served with mushroom and potatoes",
    price: 12.25,
  },
];

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://hussains-46374-default-rtdb.firebaseio.com/Menu/Appetizers.json');
      const responseData = await response.json();
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
    };

    fetchMeals();
  }, []);

  console.log(meals)


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
