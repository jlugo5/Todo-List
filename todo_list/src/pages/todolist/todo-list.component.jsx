import {connect} from 'react-redux'

const TodoList = ({todoList}) => {
    let x = 1
    return(<div>
        <h3>Todo List</h3>
        {
            //todoList.map(todo => <h4 key={x++}>{todo}</h4>)
        }
    </div>)
}

const mapStateToProps= ({todo}) => (
    {
        todoList: todo.todoList
    }
)
export default connect(mapStateToProps,null)(TodoList)