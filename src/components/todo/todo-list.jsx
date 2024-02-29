import "./todo-list.css";
import TodoAdd from './todo-add';
import TodoFilter from './todo-filter';
import TodoItems from './todo-Items';
import list from './todoData';
import React, { useEffect, useReducer, useState } from 'react';
import { nanoid } from "nanoid";
import { TodoReducer } from "./todo-reducer";







const TodoList = () => {

    const [tasks, dispatch] = useReducer(TodoReducer, []);

    const [filter, setFilter] = useState('All');

    //вызывается каждый раз когда происходит ререндер компонента
    //

    //2 - й параметр - зависимость. Это массив, если он пустой - зависимостей нет - этот useEffect вызывается один раз при загрузке страницы.
    //этот вариант используется, когда при загрузке страницы что либо нужно инициализировать.
    //cейчас при изменении фильтра будет вызываться юзэффект
    //1-всенда, тогда пустой массив не указываем
    //2- когда есть пустой массив- единожды при загрузке
    //3- когда есть изменения чего-то, что указано (сейчас фильр)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    useEffect(() => {
        dispatch({
            action: 'restore',
            payload: JSON.parse(localStorage.getItem("tasks")) || list,
        })
        //  setTasks(JSON.parse(localStorage.getItem("tasks")) || list);
    }, []);



    const filterMap = {
        All: () => true,
        "Done all": (task) => task.done,
        ToDo: (task) => !task.done,
    };


    const addTask = (title) => {
        dispatch({
            type: 'create',
            payload: title,
        })
    }

    const toggleDone = (id) => {
        dispatch({
            type: 'changeDone',
            payload: id,
        })

        // setTasks(newTasks);
    }

    const updateTask = (id, title) => {
        dispatch({
            type: 'update',
            payload: { id, title },
        })


        // setTasks(newTasks);
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
        //  setTasks(tasks.filter(task => task.id !== id));
        dispatch({
            type: 'remove',
            payload: id,
        });

    }



    return (
        <div className='container'>
            <h1 style={{ color: 'dodgerblue' }}>ToDo List</h1>
            <div className='todo-list'>


                <TodoAdd addTask={addTask} />
                <TodoFilter setFilter={setFilter} filterMap={filterMap} activeFilter={filter} />

                <div>
                    {/* map для каждого елемента массива выполняет функцию*/}
                    {tasks.filter(filterMap[filter]).map((task) =>
                        // <TodoItems title={task.title} done={task.done} key={task.id} />
                        // <TodoItems task={task} key={task.id} />
                        <TodoItems {...task} key={task.id} removeTask={removeTask} toggleDone={toggleDone} updateTask={updateTask} />
                    )}


                </div>
            </div>

        </div>

    );
}

export default TodoList;
