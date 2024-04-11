import Modal from "./UI/Modal";

import { useContext } from "react";
import { CartContext } from "../store/CartContextProvider";

export default function Cart() {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx);

  const cartTotal = cartCtx.cart.items.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0,
  );

  return (
    <Modal open className="cart">
      <h2>My Cart</h2>
      <ul>
        {cartCtx.cart.items.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
      <p className="cart-total">$ {cartTotal}</p>
    </Modal>
  );
}
