import React from 'react';

import "./todo-list.css";
import TodoAdd from './todo-add';
import TodoFilter from './todo-filter';
import TodoItems from './todo-Items';

const list = [
    {
        id: 1,
        title: 'Спортзал',
        done: false
    },
    {
        id: 2,
        title: 'Работа',
        done: true
    },
    {
        id: 3,
        title: 'Шоппинг',
        done: true
    }
];






const TodoList = () => {

    return (
        <div className='container'>
            <h1 style={{ color: 'dodgerblue' }}>ToDo List</h1>
            <div className='todo-list'>


                <TodoAdd />
                <TodoFilter />

                <div>
                    {/* map для каждого елемента массива выполняет функцию*/}
                    {list.map((task) =>
                        // <TodoItems title={task.title} done={task.done} key={task.id} />
                        // <TodoItems task={task} key={task.id} />
                        <TodoItems {...task} key={task.id} />
                    )}


                </div>
            </div>

        </div>

    );
}

export default TodoList;
