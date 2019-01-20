import React, {Component} from "react";
import User from './User';

class UserList extends Component {

  render() {
    const {users} = this.props;

    return (
      <div>
        {users.results.length < 1 ? <p>waiting for data</p> : 

        (<ul className="users__list" >
          {users.map((item, index) => {
            return (
              <li className='user' key={index}>
                <User item={item} index= {index}/>

              </li>
            );
          })
          }
        </ul>)
        />}
      </div>
    );
  }
}

export default UserList;