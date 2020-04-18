import React from "react";
import Header from "./header";
import "./Grid.css";
import { BrowserRouter, Route } from "react-router-dom";
import Employees from "./employees/employees.js";

class Grid extends React.Component {
  sortHandler() {}

  render() {
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
}

// function Grid() {
//   return (
//     <BrowserRouter>
//       <Route path="/">
//         <table>
//           <Header />
//           <Employees />
//         </table>
//       </Route>
//     </BrowserRouter>
//   );
// }

export default Grid;
