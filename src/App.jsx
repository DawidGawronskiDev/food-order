import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContextProvider";
import UserProgressProvider from "./store/UserProgressProvider";

function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
