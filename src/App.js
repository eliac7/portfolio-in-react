import Home from "./Home";
import NotFound from "./components/Error/NotFound";
import { Mouse } from "./components/Mouse/Mouse";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Mouse></Mouse>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
