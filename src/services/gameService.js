import axios from "axios"
import firebase from './firebase.js';
import { storageService } from './utils/asyncStorageService';

// var axios = Axios.create({
//     withCredentials: true
// })

export const gameService = {
    searchGames, getGameDetailsById, add, query
}

var gamesDb = null

async function query() {

    const gamesRef = await firebase.database().ref('games');
    await gamesRef.on('value', (snapshot) => {
        let values = snapshot.val();
        var games = [];
        for (let game in values) {
            games.push({
                fb_id: game,
                ...values[game]
            })
        }
        console.log(games);
        gamesDb = games
    })
    console.log('sevice game', gamesDb)
    return gamesDb;

}

async function searchGames(search = null) {
    try {
        const games = await storageService.query('searchedGames')
        if (games && games.length > 0) return games;
        const res = await axios.get('https://api.rawg.io/api/games', { params: { search, key: "8609160f7b444c07ba6ccbdc516509f5" } })
        storageService.save('searchedGames', res.data.results)
        return res.data.results;
    }
    catch (err) {
        console.log('Error with loading games', err)
    }

}

async function getGameDetailsById(id) {
    try {
        const res = await axios.get(`https://api.rawg.io/api/games/${id}`)
        console.log(res.data)
        return res.data
    }
    catch (err) {
        console.log('cant find game', err)
    }
}

async function add(game) {

    const gamesRef = await firebase.database().ref('games');
    gamesRef.push(game);
}


