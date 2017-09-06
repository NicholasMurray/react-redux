const initState = {
    todos: [
        { id: 1, description: 'Create Static UI', isCompleted: true },
        { id: 2, description: 'Create Initial State', isCompleted: true },
        { id: 3, description: 'Use State to Render UI', isCompleted: false },
    ]
}
export default (state = initState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)}
        default:
            return state;
    }
}