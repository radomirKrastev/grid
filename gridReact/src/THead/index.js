import React from "react";

class Header extends React.Component {
  renderTh(handler, sortby, text) {
    return (
      <th>
        <button onClick={handler} className="sort" data-sortby={sortby}>
          {text}
        </button>
      </th>
    );
  }

  render() {
    const { sortHandler } = this.props;

    return (
      <thead>
        <tr>
          {this.renderTh(sortHandler, "id", "Identification")}
          {this.renderTh(sortHandler, "first_name", "First Name")}
          {this.renderTh(sortHandler, "last_name", "Last Name")}
          {this.renderTh(sortHandler, "email", "Email")}
          {this.renderTh(sortHandler, "job_title", "Position")}
          {this.renderTh(sortHandler, "department", "Department")}
        </tr>
      </thead>
    );
  }
}

export default Header;
