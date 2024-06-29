import { useState } from 'react'

// todo application
// todo
// {
//   todos: [{title: "todo1", description: "First todo", completed: false}]
// }

function App() {
  const [todos, setTodos] = useState([{
    title : "Go to gym",
    description : "Go to gym 7-9",
    completed : false
  },{
    title : "Study DSA",
    description : "Study DSA from 8-4",
    completed : true
  },
  {
    title : "Study DSA",
    description : "Study DSA from 8-4",
    completed : true
  }])

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([...todos, {
      title: "New Todo",
      description: "descr of new todo",
    }])
  }


  //iterating all the values in the todo
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
      return <Todo title = {todo.title} description = {todo.description} />
    })}
    </div>
  )
}

//  Todo app, {
//  title,
//  description
//  }

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
