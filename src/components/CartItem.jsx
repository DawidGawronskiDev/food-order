import { useContext } from "react";
import { CartContext } from "../store/CartContextProvider";

export default function CartItem({ item }) {
  const { name, quantity, price } = item;
  const CartCtx = useContext(CartContext);

  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x ${price}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => CartCtx.deleteItem(item)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => CartCtx.addItem(item)}>+</button>
      </p>
    </li>
  );
}
