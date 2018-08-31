import React, { Component } from 'react';
import axios from "axios";

class Done extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/tickets/DONE')
            .then(res => {
                this.setState({
                    isLoaded: true,
                    items: res.data,
                });
            });
    }

    render() {
        const { isLoaded, items } = this.state;
        if(!isLoaded) {
            return <div>Loading....</div>;
        } else {
            return (
                <div className="Done">
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
export default Done;
