import MealItem from "./MealItem";

export default function Meals({ meals }) {
  return (
    <ul id="meals">
      {meals && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}