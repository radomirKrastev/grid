import React from "react";
import Header from "../header";
import "./Grid.css";
import Employees from "../TBody/TBody";
import employeeService from "../services/services";

class Grid extends React.Component {
  state = {
    employees: null,
    filtered: false
  };

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

    return (
      <table>
        <Header />
        <Employees
          gridState={this}
          employees={employees}
          filterHandler={this.filterHandler.bind(this)}
          deleteHandler={this.deleteHandler.bind(this)}
        />
      </table>
    );
  }
}

export default Grid;
