import React from 'react';
//import employeeList from './components/employeeList.json'
//import {Col} from 'react-bootstrap'
//import IndexPage from "./components/indexPage"
import { MDBDataTable } from 'mdbreact'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

const DatatablePage = () => {
  const data = {
    columns: [
      {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 200
      },
      {
      label: 'Title',
      field: 'title',
      sort: 'asc',
      width: 200
      },
      {
      label: 'email',
      field: 'email',
      sort: 'asc',
      width: 200
      },
      {
      label: 'Office Number',
      field: 'office',
      sort: 'asc',
      width: 200
      }
    ],
    rows: [
      {
        "name": "Colby",
        "title": "Manager",
        "office": "111-111-1111",
        "email": "colby@manager.com"
      },
      {
        "name": "Josh",
        "title": "Assistant Manager",
        "office": "222-222-2222",
        "email": "josh@assistantmanager.com"
      },
      {
        "name": "Linnea",
        "title": "Employee",
        "office": "333-333-3333",
        "email": "linnea@employee.com"
      },
      { 
        "name": "Kyle",
        "title": "Employee",
        "office": "444-444-4444",
        "email": "kyle@employee.com"
      },
      {
        "name": "Alex",
        "title": "Employee",
        "office": "555-555-5555",
        "email": "alex@employee.com"
      }
    ]
  };
  
  return (
    <MDBDataTable
      striped
      bordered
      small
      data = {data}
      sorting = {true}
      />
  );
}

export default DatatablePage;
// const filterEmployee = (searchText, maxResults, employeeList) => {
//   return employeeList.filter((employee) => {
//     if (employee.data.name.toLowerCase().includes(searchText.toLowerCase())) {
//       return true;
//     }
//     return false;
//   }).slice(0, maxResults);
// }

// const filterTitle = (searchText, maxResults, employeeList) => {
//   return employeeList.filter((employee) => {
//     if(employee.data.title.toLowerCase().includes(searchText.toLowerCase())) {
//       return true;
//     }
//     return false;
//   }).slice(0, maxResults);
// }

//var maxResults = 5;

// export default class App extends React.Component {

//   state = {
//     employeeList: employeeList,
//     selectedEmployee: employeeList[0].data,
//     filteredEmployee: employeeList,
//     //Filter by title not working
//     filteredTitle: employeeList
//   }
  
//   // Filter by title not working
//   // onSearch = (e) => {
//   //   this.setState({
//   //     filteredTitle: filterTitle(e.target.value, maxResults, this.state.employeeList)
//   //   });
//   // }

//   onSearch = (e) => {
//     this.setState({ 
//       filteredEmployee: filterEmployee(e.target.value, maxResults, this.state.employeeList)
//     });
//   }

//   render() {
//     return (
//       <Col lg = {9} md = {6} sm = {3}>
//         <Col lg = {6}>
//           <IndexPage onSearch = {this.onSearch} employeeData = {this.state.filteredEmployee}/>

//         </Col>
//       </Col>
//     )
//   }
// }
