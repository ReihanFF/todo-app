import React from 'react';
import './App.css'

function TaskList({ tasks, removeTask }) {
    const handleRemoveTask = (index) => {
        removeTask(index);
    };

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => handleRemoveTask(index)}>X</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;