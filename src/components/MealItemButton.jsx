import { useContext } from "react";
import { CartContext } from "../store/CartContextProvider";

export default function MealItemButton({ meal }) {
  const { handleCartItems } = useContext(CartContext);

  return (
    <button
      type="button"
      className="button"
      onClick={() => handleCartItems(meal)}
    >
      Add to cart
    </button>
  );
}
