import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import userApi from "../../api/userApi";
import "./DetailUser.scss";
import error from "../../assets/images/error.jpg";

class DetailUser extends Component {
  error = { error };
  getIdFromURL = () => {
    return (
      Object.keys(this.props).length > 0 &&
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    );
  };
  state = {
    detailUser: {},
    id: this.getIdFromURL(),
  };
  async componentDidMount() {
    let { id } = this.state;
    try {
      let dataFromResponse = await userApi.getById(id);
      if (
        dataFromResponse &&
        dataFromResponse.data &&
        dataFromResponse.data.data
      ) {
        let dataItem = dataFromResponse.data.data;
        this.setState({
          detailUser: dataItem,
        });
      }
    } catch (error) {
      let dataItem = {
        first_name: "Error",
        last_name: " User",
        email: "Not found email",
        avatar: this.error.error,
      };
      this.setState({
        detailUser: dataItem,
      });
    }
  }
  handleBackPage = () => {
    this.props.history.push("/users");
  };
  render() {
    let { detailUser, id } = this.state;
    return (
      <div className="detail">
        <h2>Details User {id}</h2>
        <div className="detail__body">
          {Object.keys(detailUser).length > 0 && (
            <>
              <h3>
                {detailUser.first_name}
                {detailUser.last_name}
              </h3>
              <p>{detailUser.email}</p>
              <img src={detailUser.avatar} alt="detail-avatar" />
            </>
          )}
        </div>
        <button className="detail-btn" onClick={this.handleBackPage}>
          Back
        </button>
      </div>
    );
  }
}

DetailUser.propTypes = {};

export default withRouter(DetailUser);
