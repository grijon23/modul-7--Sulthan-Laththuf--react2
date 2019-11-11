import React, { Component } from "react";

import axios from "axios";
import CardUser from "./../components/user/CardUser";
import { Link } from "react-router-dom";

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  }

  async componentDidMount() {
    await axios.get("http://localhost/reactapi/user.php").then(response =>
      this.setState({
        user: response.data
      })
    );
    console.log(this.state);
  }
  render() {
    const renderData = this.state.user.map(user => {
      return <CardUser user={user} key={user.id} />;
    });
    return (
      <div className="container mt-3">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>{renderData}</tbody>
        </table>
      </div>
    );
  }
}
