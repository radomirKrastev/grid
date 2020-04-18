import React from "react";
import Employee from "./employee";
import employeeService from "../services/services";

class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: null,
      filtered: false
    };
  }

  filterHandler(event) {
    if (!this.state.filtered) {
      const filter = event.target.textContent.trim();

      employeeService.load(filter).then((employees) => {
        this.setState({ employees });
        this.setState({ filtered: true });
      });
    } else {
      employeeService.load().then((employees) => {
        this.setState({ employees });
        this.setState({ filtered: false });
      });
    }
  }

  deleteHandler(event) {
    const id = event.target.textContent.trim();
    employeeService.remove(id);
    employeeService.load().then((employees) => {
      this.setState({ employees });
    });
  }

  componentDidMount() {
    employeeService.load().then((employees) => {
      this.setState({ employees });
    });
  }

  render() {
    const { employees } = this.state;

    return employees ? (
      <tbody>
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            id={employee.id}
            first_name={employee.first_name}
            last_name={employee.last_name}
            job_title={employee.job_title}
            department={employee.department}
            email={employee.email}
            filterHandler={this.filterHandler.bind(this)}
            deleteHandler={this.deleteHandler.bind(this)}
          ></Employee>
        ))}
      </tbody>
    ) : (
      <tbody>
        <tr>
          <td>Loading...</td>
        </tr>
      </tbody>
    );
  }
}

export default Employees;
