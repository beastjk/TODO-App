import React from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon } from '@material-ui/core';

function Todo(props) {
    return (
        <List classname="todo__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Todo.." />
            </ListItem>
        </List>
    )
}

export default Todo
