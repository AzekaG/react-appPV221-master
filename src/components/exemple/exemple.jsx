import React, { useState } from 'react';

const Exemple = () => {


    // для создания состояния используется hook. Ето прост окакие-то специальные функции в реакте.
    //для использлования состояния делаем : 
    //useState(начальное состояние(по умолчанию запишеться в state), функция, кторая изменяет состояние и возвращает массив. )
    const [i, setI] = useState(1)

    const decrement = () => {
        setI(i - 1)
    }
    const increment = () => {
        setI(i + 1)
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            {i}
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Exemple;


// document.querySelector('.test').addEventListener('click', f)
// document.querySelector('.test').onclick = f

