import React from "react";

function Header() {
  return (
    <thead>
      <tr>
        <th>
          <button className="sort" data-sortby="id">
            Identification
          </button>
        </th>
        <th>
          <button className="sort" data-sortby="first_name">
            First Name
          </button>
        </th>
        <th>
          <button className="sort" data-sortby="last_name">
            Last Name
          </button>
        </th>
        <th>
          <button className="sort" data-sortby="email">
            Email
          </button>
        </th>
        <th>
          <button className="sort" data-sortby="position">
            Position
          </button>
        </th>
        <th>
          <button className="sort" data-sortby="department">
            Department
          </button>
        </th>
      </tr>
    </thead>
  );
}

export default Header;
