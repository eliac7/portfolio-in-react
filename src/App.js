import Home from "./Home";
import NotFound from "./components/Error/NotFound";
import { Mouse } from "./components/Mouse/Mouse";
import BackToTop from "./components/BackToTop/BackToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Skills from "./components/Admin/Skills/Skills";
import NewSkill from "./components/Admin/NewSkill/NewSkill";
import Edit from "./components/Admin/Edit/Edit";
import Auth from "./components/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Register from "./components/Admin/Register/Register";
import Users from "./components/Admin/Users/Users";

const App = () => {
  return (
    <>
      <Mouse />
      <BackToTop />
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <ProtectedRoute
            path="/admin"
            exact
            component={Admin}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/edit/:id"
            exact
            component={Edit}
          ></ProtectedRoute>
          <Route path="/login" component={Auth}></Route>
          <ProtectedRoute
            path="/admin/skills"
            component={Skills}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/new"
            component={NewSkill}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/register"
            component={Register}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/admin/users"
            component={Users}
          ></ProtectedRoute>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
