import Modal from "./UI/Modal";

import { useContext } from "react";
import { CartContext } from "../store/CartContextProvider";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressProvider";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.cart.items.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0,
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal
      onClose={handleCloseCart}
      open={userProgressCtx.progress === "cart"}
      className="cart"
    >
      <h2>My Cart</h2>
      <ul>
        {cartCtx.cart.items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="cart-total">$ {cartTotal}</p>
      <p className="cart-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to checkout</Button>
      </p>
    </Modal>
  );
}
