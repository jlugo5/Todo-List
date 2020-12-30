import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

const TodoList = ({todoList}) => {
    let x = 1
    return(<div>
        <h3>Todo List</h3>
        {
            todoList.map(todo => <h4 key={x++} >{todo}</h4>)
        }
        <Link to='/'>GO TO ADD TODO</Link>
    </div>)
}

const mapStateToProps= ({todo: {todoList}}) => (
    {
        todoList
    }
)
export default connect(mapStateToProps,null)(TodoList)