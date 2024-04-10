import CartButton from "./CartButton";
import Logo from "/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Logo" />
        <h1>React food</h1>
      </div>
      <CartButton />
    </header>
  );
}
