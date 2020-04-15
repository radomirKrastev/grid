import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Grid from "./Grid";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Grid />, document.getElementById("root"));

// dbConnector()
//   .then(() => {
//     ReactDOM.render(
//       <React.StrictMode>
//         <table>
//           <Grid employees={data} />
//         </table>
//       </React.StrictMode>,
//       document.getElementById("root")
//     );
//   })
//   .catch(console.error);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();