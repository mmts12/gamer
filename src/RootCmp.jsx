import { Route, Switch } from 'react-router';
import './assets/styles/main.scss';
import { Header } from './cmps/Header';
import { routes } from './routes';
import { useEffect, useState } from 'react';
import { gameService } from './services/gameService';
import { useDispatch } from 'react-redux'
import { loadGames } from './store/actions/gameActions';
import firebase from 'firebase'

export function RootCmp() {
  const dispatch = useDispatch()
  const [games, setGames] = useState(null)

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    saveGames();
  }, [games])

  const load = async () => {
    // const gamesRef = firebase.database().ref('games');
    // gamesRef.on('value', (snapshot) => {
    //   let values = snapshot.val();
    //   var games = [];
    //   for (let game in values) {
    //     games.push({
    //       fb_id: game,
    //       ...values[game]
    //     })
    //   }
    //   dispatch(loadGames(games))
    // })
    const games = await gameService.query()
    setGames(games);
    console.log(games)
  }

  const saveGames = () => {
    if (!games) return;
    console.log(games);
  }

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

