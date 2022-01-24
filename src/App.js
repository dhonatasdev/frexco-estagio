import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Frutas from "./component/Frutas";
import Fruta from "./component/Fruta";
import Cart from "./component/Cart";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/frutas" component={Frutas} />
        <Route exact path="/frutas/:id" component={Fruta} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />


      </Switch>
    </>
  );
}

export default App;
