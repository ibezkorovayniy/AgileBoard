import React, { Component } from 'react';
import EditPopup from "../Popupform/EditPopup";

class Done extends Component {

    moveTicketHandler = (index) => {
        this.props.clickDone(index);
    };

    deleteHandler = (index) => {
        this.props.deleteDone(index);
    };

    handleSubmit = (itemId, name, description, status) => {
        this.props.editTicket(itemId, name, description, status);
    };

    render() {
        const items = this.props.doneItems;
            return (
                <div className="Done">
                    <ul>
                        {items.map((item,index) => (
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
                                <button onClick={this.moveTicketHandler.bind(this, index)}> Move </button>
                                <button onClick={this.deleteHandler.bind(this, index)} > Delete </button>
                                </div>
                                <hr></hr>
                            </li>

                        ))}
                    </ul>
                </div>
            );
        }
}
export default Done;
