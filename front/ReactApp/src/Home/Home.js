import React from 'react'
import Todo from "../GetData/Todo";
import InProgress from "../GetData/InProgress";
import Done from "../GetData/Done";
import './Home.css'
import axios from "axios";
import AddPopup from "../PopupForm/AddPopup";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
            inprogressItems: [],
            doneItems: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.setState({isLoaded: true});
        this.fetchData();
    }

    fetchData = () => {
        axios.get('http://localhost:8080/api/tickets/TODO')
            .then(res => {
                this.setState({
                    todoItems: res.data,
                });
            });
        axios.get('http://localhost:8080/api/tickets/IN_PROGRESS')
            .then(res => {
                this.setState({
                    inprogressItems: res.data,
                });
            });
        axios.get('http://localhost:8080/api/tickets/DONE')
            .then(res => {
                this.setState({
                    doneItems: res.data,
                });
            });
    };

    handleTodoMove = (index) => {
        const itemId = this.state.todoItems[index].id;
        console.log(itemId);
        axios({
            method: 'put',
            url: 'http://localhost:8080/api/tickets/' + itemId,
            data: {
                name: this.state.todoItems[index].name,
                description: this.state.todoItems[index].description,
                status: 'IN_PROGRESS'
            }
        }).then(res => {
                console.log(res.data);
                this.fetchData();
            }
        ).catch(error => {
            console.log(error)
        });
    };

    handleInprogressMove = (index) => {
        const itemId = this.state.inprogressItems[index].id;
        axios({
            method: 'put',
            url: 'http://localhost:8080/api/tickets/' + itemId,
            data: {
                name: this.state.inprogressItems[index].name,
                description: this.state.inprogressItems[index].description,
                status: 'DONE'
            }
        }).then(res => {
                console.log(res.data);
                this.fetchData();
            }
        ).catch(error => {
            console.log(error)
        });
    };

    handleDoneMove = (index) => {
        const itemId = this.state.doneItems[index].id;
        axios({
            method: 'put',
            url: 'http://localhost:8080/api/tickets/' + itemId,
            data: {
                name: this.state.doneItems[index].name,
                description: this.state.doneItems[index].description,
                status: 'TODO'
            }
        }).then(res => {
                console.log(res.data);
                this.fetchData();
            }
        ).catch(error => {
            console.log(error)
        });
    };

    handleDeleteTodo = (index) => {
        if (window.confirm('Delete this ticket: ' + this.state.todoItems[index].name + ' ?')) {
            const itemId = this.state.todoItems[index].id;
            axios.delete(('http://localhost:8080/api/tickets/' + itemId))
                .then(this.fetchData)
                .catch(error => {
                    console.log(error);
                })
        }
    };

    handleDeleteInp = (index) => {
        if (window.confirm('Delete this ticket: ' + this.state.inprogressItems[index].name + ' ?')) {
            const itemId = this.state.inprogressItems[index].id;
            axios.delete(('http://localhost:8080/api/tickets/' + itemId))
                .then(this.fetchData)
                .catch(error => {
                    console.log(error);
                })
        }
    };

    handleDeleteDone = (index) => {
        if (window.confirm('Delete this ticket: ' + this.state.doneItems[index].name + ' ?')) {
            const itemId = this.state.doneItems[index].id;
            axios.delete(('http://localhost:8080/api/tickets/' + itemId))
                .then(this.fetchData)
                .catch(error => {
                    console.log(error);
                })
        }
    };

    handleEdit = (itemId, name, description, status) => {
        axios({
            method: 'put',
            url: 'http://localhost:8080/api/tickets/' + itemId,
            data: {
                name: name,
                description: description,
                status: status
            }
        }).then(res => {
                console.log(res.data);
                this.fetchData();
            }
        ).catch(error => {
            console.log(error)
        });
    };

    handleSave = (name, description, status) => {
        axios.post('http://localhost:8080/api/ticket', {name, description, status})
            .then(res => {
                    console.log(res.data);
                    this.fetchData();
                }
            ).catch(error => {
            console.log(error)
        });
    };

    render() {
        if (!this.state.isLoaded) {
            return <p>Loading</p>
        }
        return (
            <div className="Home">
                <h1>Agile Board</h1>

                <table className="Table">
                    <thead>
                    <tr>
                        <th>TO DO
                            <AddPopup status={'TODO'} save={this.handleSave}/>
                        </th>
                        <th>IN PROGRESS
                            <AddPopup status={'IN_PROGRESS'} save={this.handleSave}/>
                        </th>
                        <th>DONE
                            <AddPopup status={'DONE'} save={this.handleSave}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Todo todoItems={this.state.todoItems}
                                  clickTodo={this.handleTodoMove}
                                  deleteTodo={this.handleDeleteTodo}
                                  editTicket={this.handleEdit}/>
                        </td>
                        <td>
                            <InProgress inprogressItems={this.state.inprogressItems}
                                        clickInp={this.handleInprogressMove}
                                        deleteInp={this.handleDeleteInp}
                                        editTicket={this.handleEdit}/>
                        </td>
                        <td>
                            <Done doneItems={this.state.doneItems}
                                  clickDone={this.handleDoneMove}
                                  deleteDone={this.handleDeleteDone}
                                  editTicket={this.handleEdit}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home
