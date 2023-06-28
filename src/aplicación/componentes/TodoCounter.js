import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

export function TodoCounter() {
const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <h2 id='TodoCounter'>Has completado {completedTodos} de {totalTodos} Tareas</h2>
    );
}

