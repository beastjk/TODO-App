import React, {Component} from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase'


class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: [
                'bisque',
                'brown',
                'DarkSalmon',
            ],
            selectedColor: '',
        }
    }

    componentDidMount() {
        this._getRandomColor()
    }

    _getRandomColor() {
        var item = this.state.bgColor[Math.floor(Math.random() * this.state.bgColor.length)];
        this.setState({
            selectedColor: item,
        })
    }

    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <List className="todo__list">
                            <ListItem className="todo__item" style={{ backgroundColor: this.state.selectedColor }}>
                                <ListItemAvatar>
                                    <Avatar><AssignmentIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText className="todo__itemText" primary={this.props.text.todo} secondary="Todo.. 😁 " />
                                <DeleteIcon onClick={event => db.collection('todos').doc(this.props.text.id).delete()}>Delete</DeleteIcon>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo
