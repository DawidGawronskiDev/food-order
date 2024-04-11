import { useContext } from "react";
import Button from "./UI/Button";
import Logo from "/logo.jpg";
import { CartContext } from "../store/CartContextProvider";

export default function Header() {
  const cartContext = useContext(CartContext);

  const itemsLength = cartContext.cart.items.reduce(
    (acc, curr) => acc + curr.quantity,
    0,
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Logo" />
        <h1>React food</h1>
      </div>
      <Button textOnly>Cart ({itemsLength})</Button>
    </header>
  );
}
