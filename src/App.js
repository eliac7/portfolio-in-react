import Home from "./Home";
import Error404 from "./Error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="*" component={Error404}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
