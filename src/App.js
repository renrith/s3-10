import React, { Component } from 'react';
import User from './components/User'
import './App.css';

const {fetchUsers} = import('./services/Service.js')

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
    const ENDPOINT = 'https://randomuser.me/api/?results=50';

      const fetchUsers = fetch(ENDPOINT).then(response => response.json())
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
        {this.state.userList.results.length < 1 ? <p>waiting for data</p> : <User user={this.state.userList.results[0]}/>}
      </div>
    );
  }
}

export default App;
