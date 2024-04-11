import useFetch from "../hooks/useFetch";
import MealItem from "./MealItem";

export default function Meals() {
  const {
    data: meals,
    error,
    isLoading,
  } = useFetch("http://localhost:3000/meals");

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <ul id="meals">
      {meals && meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
