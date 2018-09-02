import React from "react";
import Popup from "reactjs-popup";

//

class AddPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
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
        this.props.save(this.state.name, this.state.description, this.state.status);
        this.closeModal();
    };

    render() {
        return (
            <div>
                <button className="button" onClick={this.openModal}>
                    Add ticket
                </button>
                <Popup
                    open={this.state.open}
                    onClose={this.closeModal}
                >
                    <div className="modal">
                        <div className="closeButton">
                            <button className="close" onClick={this.closeModal}> close</button>
                        </div>
                        <p align="center">Add ticket</p>
                        <p></p>
                        <label className="label1">Name</label>
                        <input className="inputName"
                               type="text"
                               name='name'
                               onChange={this.onChangeHandler.bind(this)}/>
                        <p></p>
                        <label className="label1">Description</label>
                        <input className="inputDesc"
                               type="text"
                               name='description'
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

export default AddPopup;