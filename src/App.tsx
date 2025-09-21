import { Route, Switch } from "wouter";
import { Home } from "./Home";
import { About } from "./About";
import { Nav } from "./Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route>404: No such page!</Route>
      </Switch>
    </div>
  )
};

export { App };