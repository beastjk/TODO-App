import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase'

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem className = "todo__item">
                <ListItemAvatar>
                    <Avatar><AssignmentIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className="todo__itemText" primary={props.text.todo} secondary="Todo.. 😁 " />
            </ListItem>
            {/* <DeleteForeverIcon></DeleteForeverIcon> */}
            <DeleteIcon onClick={event => db.collection('todos').doc(props.text.id).delete()}>Delete</DeleteIcon>
        </List>
    )
}

export default Todo
