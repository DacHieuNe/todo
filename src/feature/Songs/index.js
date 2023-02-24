import React, { Component } from "react";
import { connect } from "react-redux";
import { faker } from "@faker-js/faker";
import PropTypes from "prop-types";
import "./Song.scss";

class Songs extends Component {
  state = {
    addInput: "",
    editButton: {},
    editInput: "",
  };
  handleAddInput = (event) => {
    this.setState({
      addInput: event.target.value,
    });
  };
  handleAddButton = () => {
    let userItem = {
      id: faker.datatype.uuid(),
      name: this.state.addInput,
      author: faker.company.name(0),
    };
    this.props.addUser(userItem);
    this.setState({
      addInput: "",
    });
  };
  handleDeleteButton = (index) => {
    this.props.deleteUser(index);
  };
  handleEditInput = (event) => {
    this.setState({
      editInput: event.target.value,
    });
  };
  handleEditButton = (item, index) => {
    let { editButton, editInput } = this.state;
    let checkEdit = Object.keys(editButton).length != 0;
    if (checkEdit && item.id == editButton.id) {
      this.props.editUser(index, editInput);
      this.setState({
        editButton: {},
      });
    } else {
      this.setState({
        editButton: item,
        editInput: item.name,
      });
    }
  };
  render() {
    let { songList } = this.props;
    let { editButton, editInput } = this.state;
    let checkEdit = Object.keys(editButton).length == 0;
    return (
      <>
        <div className="song-app">
          <h2>Todo app with Song List use Redux</h2>
          <div className="song-app__add">
            <input
              onChange={(event) => this.handleAddInput(event)}
              type="text"
              value={this.state.addInput}
            />
            <button onClick={this.handleAddButton} className="song-app__btn">
              Add Song
            </button>
          </div>
          <ul className="song-app__list">
            {Array.isArray(songList) &&
              songList.length > 0 &&
              songList.map((item, index) => (
                <li key={item.id} className="song-app__list-item">
                  Song:
                  {checkEdit ? (
                    item.name
                  ) : item.id == editButton.id ? (
                    <>
                      <input
                        type="text"
                        onChange={(event) => this.handleEditInput(event)}
                        value={editInput}
                      />
                    </>
                  ) : (
                    item.name
                  )}
                  - Author: {item.author}
                  <button
                    onClick={() => this.handleEditButton(item, index)}
                    className="song-app__edit"
                  >
                    {checkEdit
                      ? "Edit"
                      : item.id == editButton.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <span
                    onClick={() => this.handleDeleteButton(index)}
                    className="song-app__delete"
                  >
                    x
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    songList: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (userItem) => dispatch({ type: "ADD_USER", payload: userItem }),
    deleteUser: (index) => dispatch({ type: "DELETE_USER", payload: index }),
    editUser: (index, value) =>
      dispatch({
        type: "EDIT_USER",
        payload: {
          index,
          value,
        },
      }),
  };
};
Songs.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
