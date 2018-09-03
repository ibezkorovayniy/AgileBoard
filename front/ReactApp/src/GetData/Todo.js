import React, {Component} from 'react';
import EditPopup from "../PopupForm/EditPopup";

class Todo extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }

    moveTicketHandler = (index) => {
        console.log(index);
        this.props.clickTodo(index);
    };

    deleteHandler = (index) => {
        this.props.deleteTodo(index);
    };


    handleSubmit = (itemId, name, description, status) => {
        this.props.editTicket(itemId, name, description, status);
    };

    render() {
        const items = this.props.todoItems;
        return (
            <div className="Todo">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            Name: {item.name}
                            <p></p>
                            Description: {item.description}
                            <p></p>
                            <div className="buttons">
                                <EditPopup nameInput={item.name}
                                           descrInput={item.description}
                                           id={item.id}
                                           status={item.status}
                                           handleSubmit={this.handleSubmit}/>
                                <button onClick={this.moveTicketHandler.bind(this, index)}> Move</button>
                                <button onClick={this.deleteHandler.bind(this, index)}> Delete</button>
                            </div>
                            <hr></hr>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;
