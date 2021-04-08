
import React from 'react'
import './App.css';
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'


function App() {

  const [todos, setTodos] = React.useState(
    [
      { id:1, completed: false, title: 'Wake up' },
      { id:2, completed: false, title: 'Drink a cup of coffee' },
      { id:3, completed: false, title: 'Brush teeth' },
    ]
  )

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
     
    function addTodo(title) {
      setTodos(todos.concat([{
        title, 
        id: Date.now(),
        completed: false
      }]))
    }

  return (
      <div className="wrapper">
        <h1>My First React Project</h1>  
        <AddTodo onCreate={addTodo} />
        {todos.length>0 ? (
        <TodoList todos= {todos}  onToggle={toggleTodo} onRemove={removeTodo}/>
        ) : (
        <p>No todos!</p>
        )}
        
      </div>
  );

}


export default App;
