import React, {Component} from "react";

class User extends Component {

  render() {

    const {user} = this.props;

    return (
      <div className='user'>
        <h2>{user.name.first}</h2>
        <img src={user.picture.medium} alt={user.name.first}/>
        <p>{user.location.city}</p>
        <p>{user.dob.age}</p>
      </div>
    );
  }
}

export default User;