import React from 'react';
import employeeList from '../src/EmployeeDirectory/employeeList'
import index from '../src/EmployeeDirectory/index'
import employeeCard from '../src/EmployeeDirectory/employeeCard'

const filter = (searchText, maxResults) => {
  return employeeList.filter((employee) => {
    if (employee.data.name.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}

var maxResults = 5;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedEmployee: employeeList[0].data,
      filteredEmployee: filterEmployee('', maxResults)
    }
  }

  onSearch = (e) => {
    this.setState({ 
      filteredEmployee: filterEmployee(e.target.value, maxResults)
    });
  }
  onEmployeeClick = (employee) => {
    this.setState({
      selectedEmployee: {name: data.name, title: data.title, contact: data.contact}
    });
  }

  render() {
    return (
      <Col lg = {9} md = {6} sm = {3}>
        <Col lg = {6}>
          <index onSearch = {this.onSearch} employeeData = {this.state.filteredEmployee} onEmployeeClick = {this.onEmployeeClick} />
        </Col>
        <Col lg = {6}>
          <employeeCard selectedEmployee = {this.state.selectedEmployee} />
        </Col>
      </Col>
    )
  }
}
