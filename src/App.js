import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo.js'
import './App.css';
import db from './firebase'
import firebase from 'firebase'

function App() {
  //declared a state and function to change a state for this component
  const [todos, setTodos] = useState([]);
  const [input, setInput ] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [input])

  const addTodo = (event) =>{
    //this will fire off when we click our todo button
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input])
    event.preventDefault()
    setInput('')
  }

  return (
    <div className="App">
        <h1>Hello Guys!</h1>

       <form action="">

        <FormControl>
          <InputLabel>✔️ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" onClick = {addTodo} type = "submit">ADD TODO</Button>
       </form>  
      <ul className = "todo__unorderedlist">
          {todos.map(todo => (
              <Todo text = {todo}/>
          ))}
      </ul>

    </div>
  );
}

export default App;
