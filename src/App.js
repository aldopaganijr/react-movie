import Header from "./components/Header";
import SimpleBottomNavigation from "./components/Nav";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <SimpleBottomNavigation/>
      </div>

    </>
  );
}

export default App;
