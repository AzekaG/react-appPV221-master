import React, { useState } from 'react';
//когда у нас отрабатывет ксс файл?

//в реакте принято работать через ссостояние, а не обращаться через елемент обьекта. 
const Exemple = () => {
    //когда видим что на странице что-то изменяется визуально - ето должно находится в состоянии,
    //потому что компонент обновляется, обновляет внешний вид, свои данные в двух случаях : 
    //1- когда изменяется состояние
    //2- когда изменяются пропсы

    // для создания состояния используется hook. Ето прост окакие-то специальные функции в реакте.
    //для использлования состояния делаем : 
    //useState(начальное состояние(по умолчанию запишеться в state), функция, кторая изменяет состояние и возвращает массив. )

    const [visibleCounter, setVisibleCounter] = useState(true);

    const [i, setI] = useState(1)

    const [inputValue, setInputValue] = useState(1);

    // const arr = [1, 2, 3]; база, но делаем через состояние : 
    const [arr, setArr] = useState([1, 2, 3]);

    const addElement = () => {
        arr.push(4);
        setArr([...arr]);
    }


    const decrement = () => {
        setI(i - 1);
    }

    const toggleVisibleCounter = () => setVisibleCounter(!visibleCounter);

    const increment = () => {
        setI(i + 1)
    }//при сложении строки или чего-либо js складывает ето как строки. Чтоб складыввать числа - мы добавляем +.

    return (
        <div>
            <div>
                <button onClick={addElement}>
                    Add
                </button>
                {arr.join(', ')}
            </div>


            <button onClick={toggleVisibleCounter}>{visibleCounter ? 'Hide' : 'Show'}</button>
            <div>
                <button onClick={decrement}>-</button>
                {i}
                <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => setI(i + +inputValue)}>+ {inputValue}</button>
            </div>
        </div>
    );



    //либо  если мы хотим выводить вообще елемент , то применяется такой синтаксис: 
    //я так понимаю что он работает по принципу if(true && true) return;
    // return (

    //     <div>
    //         {visibleCounter && (<div>
    //             <button onClick={toggleVisibleCounter}>{visibleCounter ? 'Hide' : 'Show'}</button>
    //             <div>
    //                 <button onClick={decrement}>-</button>
    //                 {i}
    //                 <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    //                 <button onClick={() => setI(i + +inputValue)}>+ {inputValue}</button>
    //             </div>
    //         </div>)

    //         };
    //     </div>

    // );


}

export default Exemple;


// document.querySelector('.test').addEventListener('click', f)
// document.querySelector('.test').onclick = f

