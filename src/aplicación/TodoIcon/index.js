import React from 'react'
import './TodoIcon.css'
import { ReactComponent as CheckedIcon } from './Icons/checked.svg';
import { ReactComponent as DeleteIcon } from './Icons/delete.svg';


const iconTypes = {
    'checked': color => (
        <CheckedIcon className='Icon-png Icon-png--checked' fill={color}/>
    ),
    'delete': color => (
        <DeleteIcon className='Icon-png Icon--png--delete' fill={color} />
    ),
}

export function TodoIcon ({ type, color = 'gray', onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}