/*нажимаем подсказку rfc  */

import React, { useState } from 'react';

const TodoAdd = ({ addTask }) => {

    const [title, setTitle] = useState('');
    //состояние ошибки
    const [titleError, setTitleError] = useState(null);

    const clickHandler = () => {
        //trim убирает полностью пробелы
        if (title.trim().length === 0) {
            setTitleError('Текст ошибки');
            return;
        }

        addTask(title);
        setTitle('');
        setTitleError(null);


    }

    return (
        <div>
            <input type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => { if (e.code === "Enter") clickHandler() }} />
            <button onClick={clickHandler}>Add</button>
            {titleError && <div>{titleError}</div>}
        </div>
    );
};

export default TodoAdd;
