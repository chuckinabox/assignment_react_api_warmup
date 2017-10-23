import React, { Component } from "react";
import App from "../components/App";
import serialize from "form-serialize";

class AppContainer extends Component {
  constructor() {
    super();
    // Initialize users in state as an empty array and
    // set isFetching to false.
    this.state = {
      users: [],
      isFetching: false,
      error: false
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
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
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
    return <App onAddUser={this.onAddUser} {...this.state} />;
  }
}

export default AppContainer;
