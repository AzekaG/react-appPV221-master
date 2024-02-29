//здесь будет содержаться функционал работы с состояниями
import { nanoid } from "nanoid";


export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return [...state, {
                id: nanoid(),
                title: action.payload,
                done: false,
            }
            ];
        case 'remove':
            //action.payload = id
            return state.filter(item => item.id != action.payload);
        case 'removeAll':
            return [];
        case 'update':
            //action.payload = {id, newTitle}
            return state.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, title: action.payload.title }
                }
                return task;
            });

        case 'changeDone':
            //action.payload = id
            return state.map((task) => {
                if (task.id === action.payload) {
                    return { ...task, done: !task.done }
                }
                return task;
            });
        case 'restore':
            return action.payload;
        default:
            return state;

    }


};

