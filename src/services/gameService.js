import axios from "axios"
import { storageService } from './utils/asyncStorageService';

// var axios = Axios.create({
//     withCredentials: true
// })

export const gameService = {
    searchGames,getGameDetailsById,add
}

async function searchGames(search = null) {
    try {
        const games = await storageService.query('searchedGames')
        console.log(games)
        if (games && games.length > 0) return games;
        const res = await axios.get('https://api.rawg.io/api/games', { params: { search } })
        storageService.save('searchedGames', res.data.results)
        console.log(res.data)
        return res.data.results;
    }
    catch (err) {
        console.log('Error with loading games', err)
    }

}

async function getGameDetailsById(id){
    try{
        const res = await axios.get(`https://api.rawg.io/api/games/${452645}`)
        console.log(res.data)
        // return res.data
    }
    catch(err){
        console.log('cant find game',err)
    }
}

 function add(game){
    console.log(game)
}



