import React, {useState, initialState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'reactstrap';
import './App.css';

function App() {
  //declared a state and function to change a state for this component
  const [todos, setTodos] = useState(['Take a dog for a walk', 'Take the rubbish out', 'I want to play pubg today']);
  const [input, setInput ] = useState('')

  console.log('Input is : ', input);

  const addTodo = (event) =>{
    //this will fire off when we click our todo button
    setTodos([...todos, ])

  }

  return (
    <div className="App">
        <h1>Hello Guys!</h1>
      <input type="text" style={{ height: "40px" }} className = 'mb-5' value = {input} onChange = {event => setInput(event.target.value)}/>
      <Button color="primary" onClick={addTodo}>Add Todo</Button>

      <ul>
          {todos.map(todo => {
            return <li>{todo}</li>
          })}
      </ul>

    </div>
  );
}

export default App;
