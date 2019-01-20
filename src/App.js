import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

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
        <UserList users={this.state.userList.results}/>
        <Switch>
            <Route path="/userdetail/:id" render= {props => <UserDetail match={props.match} userlist={this.state.userlist} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
