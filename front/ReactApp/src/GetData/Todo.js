import React, { Component } from 'react';
import axios from 'axios'

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/tickets/TODO')
            .then(res => {
                this.setState({
                    isLoaded: true,
                    items: res.data,
                });
            });
    }

    render() {
        var { isLoaded, items } = this.state;
        if(!isLoaded) {
            return <div>Loading....</div>;
        } else {
            return (
                    <div className="Todo">
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    Name: {item.name}
                                    <p></p>

                                    Description: {item.description}
                                    <p></p>
                                    <button>Edit ticket</button>
                                    <hr></hr>

                                </li>

                            ))}
                        </ul>
                    </div>
            );
        }

  }
}
export default Todo;
