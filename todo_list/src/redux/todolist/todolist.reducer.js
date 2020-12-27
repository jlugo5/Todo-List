const INITIAL_STATE = {
    todo:'',
    todoList: []
}

const todoListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return{
                ...state,
                todoList: [...state.todoList,...action.payload]
            }
            case "SET_TODO":
                return{
                    ...state,
                    todo: action.payload
                }
    
        default:
            return state
    }
}

export default todoListReducer