import React from 'react'
import {FormControl} from 'react-bootstrap'
import EmployeeList from './employeeList'

class IndexPage extends React.Component {
    onChange = (event) => this.props.onSearch(event)
    render() {
        return (
            <div className = "employeeContainer">
                <h1>Employee Directory</h1>
                <div className = "searchBar">
                     <p>Please Search Employees Name</p>
                <FormControl onChange = {this.onChange} />
                </div>
                <div className = "employeeData">
                    <EmployeeList employeeData = {this.props.employeeData} />
                </div>
                
            </div>
        );
    }
}

export default IndexPage