import CustomButton from "../../components/custom-button/custom-button.component";
import InputBox from "../../components/input-box/input-box.component";
import { addTodo, setTodo } from "../../redux/todolist/todolist.action";
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


const HomePage = ({todo, addTodo,setTodo}) => {
    const handleChange = event => {
        setTodo(event.target.value)
        console.log(todo)
    }
    
    return(<div>
        <h3>Home Page</h3>
        <InputBox handleChange={handleChange}/>
        <CustomButton onClick={() => addTodo({todo})}>ENTER</CustomButton>
        <Link to='/todoList'>GO TODO LIST</Link>
    </div>)
}


const mapStateToProps = ({todo:{todo}}) => (
    {
        todo
    }
)

const mapDispatchtoProps = dispatch => (
    {
        addTodo: todo => dispatch(addTodo(todo)),
        setTodo: todo => dispatch(setTodo(todo))
    }
)

export default connect(mapStateToProps,mapDispatchtoProps)(HomePage)