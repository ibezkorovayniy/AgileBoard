import React from "react";
import Popup from "reactjs-popup";

class EditPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            id: this.props.id,
            name: this.props.nameInput,
            description: this.props.descrInput,
            status: this.props.status
        };
    }

    openModal = () => {
        this.setState({open: true});
    };
    closeModal = () => {
        this.setState({open: false});
    };

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleSubmit = () => {
        this.props.handleSubmit(this.state.id, this.state.name, this.state.description, this.state.status);
        this.closeModal();
    };

    render() {
        return (
            <div>
                <button className="button" onClick={this.openModal}>
                    Edit ticket
                </button>
                <Popup
                    open={this.state.open}
                    onClose={this.closeModal}
                >
                    <div className="modal">
                        <div className="closeButton">
                            <button className="close" onClick={this.closeModal}> close</button>
                        </div>
                        <p align="center">Edit ticket</p>
                        <p></p>
                        <label className="newLabel">Name</label>
                        <input className="Ticket-Name"
                               type="text"
                               name='name'
                               defaultValue={this.state.name}
                               onChange={this.onChangeHandler.bind(this)}/>
                        <p></p>

                        <label className="newLabel">Description</label>
                        <input className="Ticket-Desc"
                               type="text"
                               name='description'
                               defaultValue={this.state.description}
                               onChange={this.onChangeHandler.bind(this)} size={50}/>
                        <div className="closeButton">
                            <button onClick={this.handleSubmit.bind(this)}>Save</button>
                        </div>
                    </div>
                </Popup>
            </div>
        );
    }
}

export default EditPopup;