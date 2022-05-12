import React from "react";
import { Button, Form } from 'react-bootstrap';

function FormTodo ({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    /**
     * The handleSubmit function takes an event as an argument, prevents the default action, checks if
     * the value is empty, and if it's not, it adds the value to the todo list and resets the value to an
     * empty string.
     * @returns The return statement is used to return a value from a function.
     */
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit = {handleSubmit}>
        <Form.Group>
          <Form.Label><b>Add Todo</b></Form.Label>
          <Form.Control type ="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder = "Add new todo" />
        </Form.Group>
        <Button variant="primary mb-3" type="submit">Submit</Button>
        </Form>
    );
  }
    export default FormTodo;