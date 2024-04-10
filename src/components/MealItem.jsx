import MealItemButton from "./MealItemButton";

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <h3>{meal.name}</h3>
        <span className="meal-item-price">$ {meal.price}</span>
        <span className="meal-item-description">{meal.description}</span>
        <div className="meal-item-actions">
          <MealItemButton item={meal} />
        </div>
      </article>
    </li>
  );
}
