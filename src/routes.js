import { Home } from './pages/Home';
import { GamerApp } from './pages/GamerApp'
import { Market } from './pages/Market';
import { Statistics } from './pages/Statistics';
import { Games } from './pages/Games';


export const routes = [
    {
        path: '/games',
        component: Games
    },
    {
        path: '/market',
        component: Market
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '/',
        component: GamerApp,
    },
]