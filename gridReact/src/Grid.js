import React from "react";
import Header from "./header";
import "./Grid.css";
import { BrowserRouter, Route } from "react-router-dom";
import Employees from "./employees/employees.js";

function Grid() {
  return (
    <BrowserRouter>
      <Route path="/">
        <table>
          <Header />
          <Employees />
        </table>
      </Route>
    </BrowserRouter>
  );
}

export default Grid;
