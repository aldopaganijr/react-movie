import { Container } from "@mui/material";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/Nav";
import "./styles/app.scss";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search"
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
