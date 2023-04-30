import Home from "./Home";
import HomeContext from "./context/HomeContext";

function App() {
  return (
    <HomeContext>
      <Home />
    </HomeContext>
  );
}

export default App;
