import React, { useState, useEffect } from "react";
import Header from "../THead";
import "./Grid.css";
import Employees from "../TBody/TBody";
import restService from "../services/services";

function Grid() {
  const [employees, updateEmployees] = useState(null);
  const [filterBy, changeFilter] = useState(null);
  const [orderedBy, changeOrder] = useState("id");

  useEffect(() => {
    restService.load(filterBy, orderedBy).then((employeesToLoad) => {
      updateEmployees(employeesToLoad);
    });
  }, [filterBy, orderedBy]);

  const filterHandler = (event) => {
    const filter = event.target.textContent.trim();
    filterBy ? changeFilter(null) : changeFilter(filter);
  };

  const sortHandler = (event) => {
    const orderBy = event.target.dataset.sortby;
    changeOrder(orderBy);
  };

  const deleteHandler = (event) => {
    const id = event.target.textContent.trim();
    restService.remove(id);
    restService.load(filterBy, orderedBy).then((newEmployees) => {
      updateEmployees(newEmployees);
    });
  };

  return (
    <table>
      <Header sortHandler={sortHandler} />
      <Employees
        employees={employees}
        filterHandler={filterHandler}
        deleteHandler={deleteHandler}
      />
    </table>
  );
}

export default Grid;
