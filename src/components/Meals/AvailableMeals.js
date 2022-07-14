import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () =>{

  const [meals, setMeals] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [httpError, setHttpError] = React.useState();

  React.useEffect(()=>{
    const fetchMeals = async () => {
      const response = await fetch("https://react-meals-https-default-rtdb.firebaseio.com/meals.json");

      if(!response.ok)
      {
        throw new Error("Something Went Wrong!!!");
      }

      const data = await response.json();

      const loadedMeals = [];
      for(const key in data)
      {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
    };
    setMeals(loadedMeals);
    setIsLoading(false);
  }

  
    fetchMeals().catch(error => {
      setIsLoading(false);
    setHttpError(error.message);
    }) 
    
  

  },[]);

 if(isLoading)
 {
  return <section><p className={classes.mealsLoading}>Loading</p></section>
 }

 if(httpError)
 {
  return <section><p className={classes.mealsError}>{httpError}</p></section>
 }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
