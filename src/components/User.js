import React, {Component, Fragment} from "react";
import {Link, Route, Switch} from 'react-router-dom';
import UserDetail from "./UserDetail";


class User extends Component {

  render() {
    const {item, index} = this.props;

    return (
        <Fragment>
            <h2>{item.name.first}</h2>
            <img src={item.picture.medium} alt={item.name.first}/>
            <p>{item.location.city}</p>
            <p>{item.dob.age}</p>
            <Link to={`/user/${index}`}>Detalles</Link>

        </Fragment>
    );
  }
}

export default User;