import React, { Component } from 'react';
import User from './components/User'
import './App.css';

import {fetchUsers} from './services/Service';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userList: {
        results: []
      }
    }

    this.fetchNewUsers();

    this.fetchNewUsers= this.fetchNewUsers.bind(this);
  }

  fetchNewUsers() {
    //const ENDPOINT = 'https://randomuser.me/api/?results=50';

    fetchUsers(3)
      .then(data => {
        console.log(data);
        this.setState({
          userList: data
        })
      });
  }

  render() {

    return (
      <div className="App">
        {this.state.userList.results.length < 1 ? <p>waiting for data</p> : <User users={this.state.userList.results}/>}
      </div>
    );
  }
}

export default App;
