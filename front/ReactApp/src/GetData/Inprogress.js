import React, { Component } from 'react';
import axios from "axios";


class Inprogress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/tickets/IN_PROGRESS')
            .then(res => {
                this.setState({
                    items : res.data,
                    isLoaded: true
                });
            });

    }

    render() {
        var { isLoaded, items } = this.state;
        if(!isLoaded) {
            return <div>Loading....</div>;
        } else {
            return (
                <div className="Inprogress">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.name}
                                <p></p>
                                Description: {item.description}
                                <p></p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
  }
}
export default Inprogress;
