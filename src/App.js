import React from 'react';
import employeeList from './components/employeeList.json'
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

// const filterTitle = (searchText, maxResults, employeeList) => {
//   return employeeList.filter((employee) => {
//     if(employee.data.title.toLowerCase().includes(searchText.toLowerCase())) {
//       return true;
//     }
//     return false;
//   }).slice(0, maxResults);
// }

var maxResults = 5;

export default class App extends React.Component {

  state = {
    employeeList: employeeList,
    selectedEmployee: employeeList[0].data,
    filteredEmployee: employeeList,
    //Filter by title not working
    filteredTitle: employeeList
  }
  
  // Filter by title not working
  // onSearch = (e) => {
  //   this.setState({
  //     filteredTitle: filterTitle(e.target.value, maxResults, this.state.employeeList)
  //   });
  // }

  onSearch = (e) => {
    this.setState({ 
      filteredEmployee: filterEmployee(e.target.value, maxResults, this.state.employeeList)
    });
  }

  render() {
    return (
      <Col lg = {9} md = {6} sm = {3}>
        <Col lg = {6}>
          <IndexPage onSearch = {this.onSearch} employeeData = {this.state.filteredEmployee}/>

        </Col>
      </Col>
    )
  }
}
