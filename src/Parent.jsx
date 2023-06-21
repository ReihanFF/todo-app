import React, { useState } from 'react';
import TaskList from './child';
import './App.css'

function TodoApp() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={handleInputChange}
                    placeholder="Masukkan kegiatan"
                />
                <button onClick={handleAddTask}>Simpan</button>
            </div>

            <TaskList tasks={tasks} removeTask={handleRemoveTask} />
        </div>
    );
}

export default TodoApp;