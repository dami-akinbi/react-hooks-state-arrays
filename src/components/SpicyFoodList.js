import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

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

  // to filter by selected option
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
    // console.log(event.target.value);
  }
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") return true;
    else return food.cuisine === filterBy;
  });

  const foodList = foodsToDisplay.map((food) => (
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
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
