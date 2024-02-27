import "./todo-list.css";
import TodoAdd from './todo-add';
import TodoFilter from './todo-filter';
import TodoItems from './todo-Items';
import list from './todoData';
import React, { useState } from 'react';
import { nanoid } from "nanoid";







const TodoList = () => {
    const [tasks, setTasks] = useState(list);

    const addTask = (title) => {
        setTasks([...tasks, {
            id: nanoid(),
            title,
            done: false
        }]);
    }

    const removeTask = (id) => {
        //функция фильт
        //const arr = [1,2,3]
        //arr.filter((n)=> true (или n%2)) на каждый елемент массива вызывается функция, и каждый елемен массива попадает в параметр функции
        //и если функция возвращает true  то в новосозданный массив будет возвращатсья етот елемент


        /**в данном случае :
         * const arr = [
         * {id:1, title: '1111},
         * {id:2, title: '2222'},
         * {id:3, title: '3333'}];
        const newArr = arr.filter((n)=>n.id !== 2)
       
        
        */
        setTasks(tasks.filter(task => task.id !== id));


    }



    return (
        <div className='container'>
            <h1 style={{ color: 'dodgerblue' }}>ToDo List</h1>
            <div className='todo-list'>


                <TodoAdd addTask={addTask} />
                <TodoFilter />

                <div>
                    {/* map для каждого елемента массива выполняет функцию*/}
                    {tasks.map((task) =>
                        // <TodoItems title={task.title} done={task.done} key={task.id} />
                        // <TodoItems task={task} key={task.id} />
                        <TodoItems {...task} key={task.id} removeTask={removeTask} />
                    )}


                </div>
            </div>

        </div>

    );
}

export default TodoList;
