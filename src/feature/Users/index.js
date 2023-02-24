import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./Users.scss";
import userApi from "../../api/userApi";

class Users extends Component {
  state = {
    userList: [],
  };
  async componentDidMount() {
    try {
      let dataResponse = await userApi.getAll();
      if (dataResponse.data && dataResponse.data.data) {
        let getDataResponse = dataResponse.data.data;
        this.setState({
          userList: getDataResponse,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  handleUserItem = (id) => {
    this.props.history.push(`/users/${id}`);
  };
  render() {
    let { userList } = this.state;
    return (
      <div className="users">
        <h2>Render User List</h2>
        <ul className="users-list">
          {Array.isArray(userList) &&
            userList.length > 0 &&
            userList.map((item, index) => (
              <li
                onClick={() => this.handleUserItem(item.id)}
                key={item.id}
                className="users-list-item"
              >
                {index + 1} - {item.first_name}
                {item.last_name} - {item.email}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {};

export default withRouter(Users);
