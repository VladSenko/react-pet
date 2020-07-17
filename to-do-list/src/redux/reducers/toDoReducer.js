export default function toDoReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_TO_DO_ITEM':
            return [...state, { ...action.toDoItem }];
        default:
            return state;
    }
}
