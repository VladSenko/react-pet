export function createToDoItem(toDoItem) {
    return { type: 'CREATE_TO_DO_ITEM', toDoItem };
}

export function updateItem(toDoItem) {
    return { type: 'UPDATE_ITEM', toDoItem };
}
