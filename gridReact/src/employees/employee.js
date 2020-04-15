import React, { Component } from "react";

class Employee extends Component {
  render() {
    const { id, first_name, last_name, email, job_title, department, filterHandler } = this.props;

    // "id":2,"first_name":"Deb","last_name":"Nielson",
    // "email":"dnielson1@cpanel.net","job_title":"Developer I","department":"Legal"

    // handleFilter = (event) => {};

    return (
      <tr>
        <td>
          <button className="delete">{id}</button>
        </td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>
          <a href="mailto:{email}">{email}</a>
        </td>
        <td>{job_title}</td>
        <td>
          <button onClick={filterHandler} className="filter">
            {department}
          </button>
        </td>
      </tr>
    );
  }
}

export default Employee;
