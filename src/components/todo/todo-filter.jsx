import classNames from 'classnames';
import React from 'react';

const TodoFilter = ({ setFilter, filterMap, activeFilter }) => {
    const filterKeys = Object.keys(filterMap); //возврат массива ключей переданного обьекта


    return (
        <div>
            {filterKeys.map(filter =>
                <button className={classNames({ active: filter === activeFilter })} onClick={() => { setFilter(filter) }} key={filter}>{filter}</button>)}
        </div>
    );
}

export default TodoFilter;
