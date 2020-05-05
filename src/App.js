import React from 'react';
import employeeList from './components/employeeList.json'
import EmployeeCard from './components/employeeCard'
import {Col} from 'react-bootstrap'
import IndexPage from "./components/indexPage"

const filterEmployee = (searchText, maxResults, employeeList) => {
  return employeeList.filter((employee) => {
    if (employee.data.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}

const sortEmployee = (employeeList) => {
  return employeeList.sort(function(a, b) {
    var nameA = a.data.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.data.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
}

var maxResults = 5;

export default class App extends React.Component {

  state = {
    employeeList: employeeList,
    selectedEmployee: employeeList[0].data,
    filteredEmployee: employeeList
  }
  

  onSearch = (e) => {
    this.setState({ 
      filteredEmployee: filterEmployee(e.target.value, maxResults, this.state.employeeList)
    });
  }
  onEmployeeClick = (employee) => {
    this.setState({
      selectedEmployee: {employee}
    });
  }

  render() {
    return (
      <Col lg = {9} md = {6} sm = {3}>
        <Col lg = {6}>
          <IndexPage onSearch = {this.onSearch} employeeData = {this.state.filteredEmployee} onEmployeeClick = {this.onEmployeeClick} />
        </Col>
        <Col lg = {6}>
          {/* <EmployeeCard selectedEmployee = {this.state.selectedEmployee} /> */}
        </Col>
      </Col>
    )
  }
}
