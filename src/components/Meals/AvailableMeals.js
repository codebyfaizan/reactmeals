import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole Bhature",
    description: "Sizzling hot Chole and crispy Bhature",
    price: 50,
  },
  {
    id: "m2",
    name: "Vada Pav",
    description: "A Marathi specialty!",
    price: 40,
  },
  {
    id: "m3",
    name: "Poori Sabzi",
    description: "Crispy, spicy, tasty",
    price: 30,
  },
  {
    id: "m4",
    name: "Aloo Paratha",
    description: "Wheaty...and tangy...",
    price: 40,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
}

export default AvailableMeals;
