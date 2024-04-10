import Header from "./components/Header";
import Meals from "./components/Meals";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, error, isLoading } = useFetch("http://localhost:3000/meals");

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Header />
      {isLoading ? <span>Loading...</span> : <Meals meals={data} />}
    </>
  );
}

export default App;
