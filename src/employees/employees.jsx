import React, { Component } from "react";
import Employee from "../employee/employee";

class Employees extends Component {
  state = {
    employees: [
      { Id: 1, Name: "Rijvy" },
      { Id: 3, Name: "Tarek" },
      { Id: 4, Name: "Kajol" },
      { Id: 5, Name: "Sifat" }
    ],
    employee: this.props.employee
  };

  render() {
    return (
      <div>
        {this.state.employees.map(employee => (
          <Employee key={employee.Id} employee={employee} />
        ))}
        <button onClick={this.logEmployees}>Log</button>
      </div>
    );
  }

  logEmployees = () => {
    console.log(this.state.employees);
  };
}

export default Employees;
