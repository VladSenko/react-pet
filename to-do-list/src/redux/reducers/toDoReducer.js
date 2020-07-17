const initialState = {
    toDos: [],
    bus: 1
};

export default function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_TO_DO_ITEM':
            return { ...state, toDos: [...state.toDos, action.toDoItem] };
        default:
            return state;
    }
}
