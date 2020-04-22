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
    restService.load().then((employeesToLoad) => {
      updateEmployees(employeesToLoad);
    });
  }, []);

  const filterHandler = (event) => {
    const filter = event.target.textContent.trim();
    filterBy ? changeFilter(null) : changeFilter(filter);

    (filterBy ? restService.load(null, orderedBy) : restService.load(filter, orderedBy)).then(
      (newEmployees) => {
        updateEmployees(newEmployees);
      }
    );
  };

  const sortHandler = (event) => {
    const orderBy = event.target.dataset.sortby;
    restService.load(filterBy, orderBy).then((newEmployees) => {
      updateEmployees(newEmployees);
      changeOrder(orderBy);
    });
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
