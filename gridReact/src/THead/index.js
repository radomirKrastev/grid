import React from "react";

function Header(props) {
  function renderTh(handler, sortby, text) {
    return (
      <th>
        <button onClick={handler} className="sort" data-sortby={sortby}>
          {text}
        </button>
      </th>
    );
  }

  const { sortHandler } = props;

  return (
    <thead>
      <tr>
        {renderTh(sortHandler, "id", "Identification")}
        {renderTh(sortHandler, "first_name", "First Name")}
        {renderTh(sortHandler, "last_name", "Last Name")}
        {renderTh(sortHandler, "email", "Email")}
        {renderTh(sortHandler, "job_title", "Position")}
        {renderTh(sortHandler, "department", "Department")}
      </tr>
    </thead>
  );
}

export default Header;
