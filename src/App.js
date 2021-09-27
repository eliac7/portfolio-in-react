import Home from "./Home";
import NotFound from "./components/Error/NotFound";
import { Mouse } from "./components/Mouse/Mouse";
import BackToTop from "./components/BackToTop/BackToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Skills from "./components/Admin/Skills/Skills";
import NewSkill from "./components/Admin/NewSkill/NewSkill";
import Edit from "./components/Admin/Edit/Edit";

const App = () => {
  return (
    <>
      <Mouse></Mouse>
      <BackToTop></BackToTop>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/admin/edit/:id" exact component={Edit}></Route>
          <Route path="/admin/skills" component={Skills}></Route>
          <Route path="/admin/new" component={NewSkill}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
