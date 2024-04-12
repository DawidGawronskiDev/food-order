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
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
