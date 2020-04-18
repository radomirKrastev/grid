import React from "react";
import Employee from "./TRow";

function Employees(props) {
  const { employees, filterHandler, deleteHandler } = props;

  return employees ? (
    <tbody>
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          {...employee}
          filterHandler={filterHandler}
          deleteHandler={deleteHandler}
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

export default Employees;
