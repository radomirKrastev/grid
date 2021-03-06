import React, { Component } from "react";

class Employee extends Component {
  render() {
    const {
      id,
      first_name,
      last_name,
      email,
      job_title,
      department,
      filterHandler,
      deleteHandler
    } = this.props;

    return (
      <tr>
        <td>
          <button onClick={deleteHandler} className="delete">
            {id}
          </button>
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
