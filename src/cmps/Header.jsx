import React from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <nav className="main-layout links-container">
                <ul>
                    
                     <li>התחבר</li>
                    <NavLink to="/" activeClassName='is-active' exact> <li>חיפוש</li></NavLink>
                    <NavLink to="/games" activeClassName='is-active'> <li>משחקים</li></NavLink>
                    <NavLink to="/market" activeClassName='is-active'> <li>מרקט</li></NavLink>
                    <NavLink to="/statistics" activeClassName='is-active'> <li>סטטיסטיקות</li></NavLink>
                </ul>
                <h1>גיימר</h1>
            </nav>
        </header>
    )
}
