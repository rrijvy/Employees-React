import React, { Component } from "react";

class Employee extends Component {
  state = {
    employee: this.props.employee
  };

  render() {
    return (
      <div>
        <h4>{this.state.employee.Name}</h4>
        <input
          onChange={e => this.changeName(this.state.employee, e.target.value)}
          employee={this.state.employee}
          value={this.state.employee.Name}
          type={Text}
        />
      </div>
    );
  }

  changeName = (employee, value) => {
    let emp = employee;
    emp.Name = value;
    this.setState({ employee: emp });
  };
}

export default Employee;
