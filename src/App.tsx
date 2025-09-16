import { Route, Switch } from "wouter";
import { Home } from "./Home";
import { About } from "./About";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route>404: No such page!</Route>
    </Switch>
  )
};

export { App };