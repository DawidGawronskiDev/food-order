import { useContext } from "react";
import Button from "./UI/Button";
import Logo from "/logo.jpg";
import { CartContext } from "../store/CartContextProvider";
import { UserProgressContext } from "../store/UserProgressProvider";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const itemsLength = cartCtx.cart.items.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  );

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Logo" />
        <h1>React food</h1>
      </div>
      <Button textOnly onClick={handleShowCart}>
        Cart ({itemsLength})
      </Button>
    </header>
  );
}
