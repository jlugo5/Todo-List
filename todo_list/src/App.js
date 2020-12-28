// Build a Simple Todo App with React and Redux
// Home Page - Input Box, Custom Button with an alert stating that todo added successfully on submit
// Todo List Page - All the the todo list should be displayed
// Build Reusable Components for Input and Button
// Dependencies
// React Router DOM
// Redux
// Redux Logger

// 11:30 ends

import './App.css'
import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import TodoList from './pages/todolist/todo-list.component'
import { Switch, Route } from 'react-router-dom'

const App = () => {
    return(
      <div className='App'>
        <h1>Todo List</h1>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/todolist' component={TodoList} />
        </Switch>
      </div>
    )
}
// Hello
export default App