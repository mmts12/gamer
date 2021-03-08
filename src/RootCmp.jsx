import { Route, Switch } from 'react-router';
import './assets/styles/main.scss';
import { Header } from './cmps/Header';
import { routes } from './routes';

export function RootCmp() {
  return (
    <div className="app">
      <Header></Header>
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            key={route.path}
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </div>
  );
}

