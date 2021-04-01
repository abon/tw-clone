import { Route, Switch } from "react-router";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="app">
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
};

export default App;
