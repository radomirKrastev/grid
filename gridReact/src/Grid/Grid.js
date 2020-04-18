import React from "react";
import Header from "../THead";
import "./Grid.css";
import Employees from "../TBody/TBody";
import employeeService from "../services/services";

class Grid extends React.Component {
  state = {
    employees: null,
    filterBy: null,
    orderedBy: "id"
  };

  filterHandler(event) {
    const filter = event.target.textContent.trim();
    this.state.filterBy ? this.setState({ filterBy: null }) : this.setState({ filterBy: filter });

    (this.state.filterBy
      ? employeeService.load(null, this.state.orderedBy)
      : employeeService.load(filter, this.state.orderedBy)
    ).then((employees) => {
      this.setState({ employees });
    });
  }

  deleteHandler(event) {
    const id = event.target.textContent.trim();
    employeeService.remove(id);
    employeeService.load(this.state.filterBy, this.state.orderedBy).then((employees) => {
      this.setState({ employees });
    });
  }

  sortHandler(event) {
    const orderBy = event.target.dataset.sortby;
    employeeService.load(this.state.filterBy, orderBy).then((employees) => {
      this.setState({ employees });
      this.setState({ orderedBy: orderBy });
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
        <Header sortHandler={this.sortHandler.bind(this)} />
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
