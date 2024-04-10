import Header from "./components/Header";
import Meals from "./components/Meals";
import useFetch from "./hooks/useFetch";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const { data, error, isLoading } = useFetch("http://localhost:3000/meals");

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <CartContextProvider>
      <Header />
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <main>
          <Meals meals={data} />
        </main>
      )}
    </CartContextProvider>
  );
}

export default App;
