import React, {Component} from "react";

class User extends Component {

  render() {
    const {users} = this.props;

    return (
      <ul className="users__list" >
        {users.map((item, index) => {
          return (
            <li className='user' key={index}>
              <h2>{item.name.first}</h2>
              <img src={item.picture.medium} alt={item.name.first}/>
              <p>{item.location.city}</p>
              <p>{item.dob.age}</p>
            </li>
          );
        })
        }
      </ul>
    );
  }
}

export default User;