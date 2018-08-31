import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";

class App extends Component {

  state = {
    persons:[
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephani', age:26}
    ]
  };

  clickHandler =() => {
    console.log('Was clicked')
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name : 'Max', age : 35},
        {name : event.target.value , age : 28},
        {name :'Stephaniya', age : 27}
      ]
    })
  };



  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Agile Board</h1>
            <Link to="/login"><button style = {style} >Login</button></Link>
        </div>
      </div>
    );
  }
}

export default App;
