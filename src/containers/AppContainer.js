import React, { Component } from "react";
import App from "../components/App";
import serialize from "form-serialize";

function findUserById(userId, allUsers) {
  let userIndex = 0;
  for (var i = 0; i < allUsers.length; i++) {
    if (Number(allUsers[i].id) === Number(userId)) {
      userIndex = i;
    }
  }
  let thisUser = allUsers[userIndex];
  return thisUser;
}

class AppContainer extends Component {
  constructor() {
    super();
    // Initialize users in state as an empty array and
    // set isFetching to false.
    this.state = {
      users: [],
      isFetching: false,
      error: false,
      editAbleUser: false,
      first_name: "",
      last_name: "",
      avatar: "",
      id: 0
    };
  }

  componentDidMount() {
    // Before performing the fetch, set isFetching to true
    this.setState({ isFetching: true });

    // After component mounts, call the API to get the
    // users, then update state which triggers re-render.
    // Add a delay to the URL and reset isFetching upon
    // completion of the request.
    fetch("https://reqres.in/api/users?delay=1")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, { hash: true });
    //header
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    //options
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    };
    //Before fetch set fetch to true
    this.setState({ isFetching: true });

    fetch("https://reqres.in/api/users", options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          isFetching: false,
          users: [...this.state.users, json],
          first_name: "",
          last_name: "",
          avatar: "",
          id: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  onDeleteUser = e => {
    e.preventDefault();
    const userId = e.target.value;
    //options
    const options = {
      method: "DELETE"
    };
    //Before fetch set fetch to true
    this.setState({ isFetching: true });

    fetch(`https://reqres.in/api/users/${userId}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return true;
      })
      .then(() => {
        let allUsers = this.state.users;
        let thisUser = findUserById(userId, this.state.users);
        allUsers.splice(allUsers.indexOf(thisUser), 1);
        this.setState({
          users: allUsers,
          isFetching: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  onEditUser = e => {
    e.preventDefault();
    let userId = e.target.value;
    let thisUser = findUserById(userId, this.state.users);
    this.setState({
      editAbleUser: true,
      first_name: thisUser.first_name,
      last_name: thisUser.last_name,
      avatar: thisUser.avatar,
      id: thisUser.id
    });
  };

  onSaveEditUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, { hash: true });
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    //options
    const options = {
      headers,
      method: "PUT",
      body: JSON.stringify(body)
    };
    //Before fetch set fetch to true
    this.setState({ isFetching: true });

    fetch(`https://reqres.in/api/users/${body.id}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return true;
      })
      .then(() => {
        let allUsers = this.state.users;
        for (var i = 0; i < allUsers.length; i++) {
          if (Number(allUsers[i].id) === Number(body.id)) {
            allUsers[i].first_name = body.first_name;
            allUsers[i].last_name = body.last_name;
            allUsers[i].avatar = body.avatar;
            allUsers[i].id = body.id;
          }
        }
        this.setState({
          users: allUsers,
          isFetching: false,
          editAbleUser: false,
          first_name: "",
          last_name: "",
          avatar: "",
          id: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  render() {
    return (
      <App
        onAddUser={this.onAddUser}
        onDeleteUser={this.onDeleteUser}
        onEditUser={this.onEditUser}
        onChange={this.onChangeInput}
        onSaveEditUser={this.onSaveEditUser}
        {...this.state}
      />
    );
  }
}

export default AppContainer;
