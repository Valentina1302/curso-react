import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';


export function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    };

    return (
        <div className="todoSearch">
            <input
                className='TodoSearch'
                placeholder='tarea'
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    );
}