import React, { Component } from 'react';
import EditPopup from "../Popupform/EditPopup";

class Inprogress extends Component {

    moveTicketHandler = (index) => {
        this.props.clickInp(index);
    };


    deleteHandler = (index) => {
        this.props.deleteInp(index);
    };

    handleSubmit = (itemId, name, description, status) => {
        this.props.editTicket(itemId, name, description, status);
    };

    render() {
        const items = this.props.inprogressItems;
            return (
                <div className="Inprogress">
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
                                <button onClick={this.moveTicketHandler.bind(this, index)} > Move </button>
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
export default Inprogress;
