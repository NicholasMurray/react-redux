import reducer from './todo'

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined()
    })
    
    test('adds a todo', () => {
        const startState = {
            todos: [
                { id: 1, description: 'Create Static UI', isCompleted: true },
                { id: 2, description: 'Create Initial State', isCompleted: true },
                { id: 3, description: 'Use State to Render UI', isCompleted: false },            
            ]
        }
        const expectedState = {
            todos: [
                { id: 1, description: 'Create Static UI', isCompleted: true },
                { id: 2, description: 'Create Initial State', isCompleted: true },
                { id: 3, description: 'Use State to Render UI', isCompleted: false },
                { id: 4, description: 'Added Todo', isCompleted: false },
            ]
        }
        const action = {type:'TODO_ADD', payload: { id: 4, description: 'Added Todo', isCompleted: false }}
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    });
    
})