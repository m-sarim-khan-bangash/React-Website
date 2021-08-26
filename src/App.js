import "./App.css";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="*" component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
