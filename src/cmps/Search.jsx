import React from 'react'
import { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';

export function Search({searchGames}) {
    const [term, setTerm] = useState('')

    const onSumbit = () => {
        if (!term) return;
        searchGames(term)
        setTerm('')
    }

    const handleInput = (ev) => {
        ev.preventDefault()
        setTerm(ev.target.value)
    }

    return (
        <div className="search-container main-layout">
            <form onSubmit={onSumbit}>
                <div className="input-wrapper">
                    <span className="search-icon-container"><SearchIcon /></span>
                    <input onChange={handleInput} type="text" value={term} name="" id="" />
                </div>
                <button>חפש</button>
            </form>
        </div>
    )
}
