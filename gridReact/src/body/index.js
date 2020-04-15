import React from "react";
import Row from "../employees";

const renderData = (employees) => {
  return employees.map((employee) => {
    return <Row key={employee.id} {...employee} />;
  });
};

function Body({ employees }) {
  return <tbody>{renderData(employees)}</tbody>;
}

export default Body;
