//здесь будет содержаться функционал работы с состояниями

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return [1, 2, 3]
            break;

        default:
            break;
    }
    return state;
}