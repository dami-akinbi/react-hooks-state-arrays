import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    // setFoods((foods) => [...foods, newFood]); // not ideal
    setFoods([...foods, newFood]);
  }

  // to delete food from list
  // function handleClick(event) {
  //   setFoods(foods.filter((food) => food.id !== event));
  // }

  // to increase heat level
  function handleClick(event) {
    // console.log(event);
    setFoods(
      foods.map((food) => {
        if (food.id === event) {
          return {
            ...food,
            heatLevel: food.heatLevel + 1,
          };
        } else return food;
      })
    );
  }

  const foodList = foods.map((food) => (
    <li
      style={{ listStyleType: "none", padding: ".4em" }}
      key={food.id}
      onClick={() => handleClick(food.id)}
    >
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
