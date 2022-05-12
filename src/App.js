import React from "react";
import './App.css';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import FormTodo from './components/Form-Todo';

function App() {
  const [todos, setTodos] = React.useState ([
    { 
      text: " This is a sample todo",
      isDone: false
    }
  ]);

/**
 * The addTodo function takes a text parameter, creates a new array with the spread operator, and then
 * sets the state of todos to the new array.
 */
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

/**
 * The markTodo function takes an index as an argument, creates a new array of todos, sets the isDone
 * property of the todo at the given index to true, and then sets the todos state to the new array of
 * todos.
 */
  const markTodo = index => {
    const newTodos = [...todos,];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

/**
 * It takes an index as an argument, creates a new array from the existing todos array, deletes the
 * item at the index, and then sets the todos array to the new array.
 */
  const removeTodo = index => {
    const newTodos = [...todos];
    // newTodos[index].splice(index, 1);
    delete newTodos[index]
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;
