import Button from "./UI/Button";

import { useContext } from "react";
import { CartContext } from "../store/CartContextProvider";

export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} />
        <h3>{meal.name}</h3>
        <span className="meal-item-price">$ {meal.price}</span>
        <span className="meal-item-description">{meal.description}</span>
        <div className="meal-item-actions">
          <Button onClick={() => addItem(meal)}>Add to cart</Button>
        </div>
      </article>
    </li>
  );
}
