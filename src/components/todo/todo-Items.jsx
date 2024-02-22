import React from 'react';

const TodoItems = (task) => {

    return (

        <div className="task-item">
            <input type="checkbox" defaultChecked={task.done} />
            <span>{task.title}</span>
            <button>delete</button>
        </div>

    );
}

export default TodoItems;
