export const addTodo = (todo) => (
    {
        type: "ADD_TODO",
        payload: todo
    }
)

export const setTodo = (todo) =>(
    {
        type: "SET_TODO",
        payload: todo
    }
)