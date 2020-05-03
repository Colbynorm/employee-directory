import React from 'react'
import {FormControl} from 'react-bootstrap'
import EmployeeList from './employeeList'

class indexPage extends React.Component {
    onChange = (event) => this.props.onSearch(event)
    render() {
        return (
            <div className = "employeeContainer">
                <h2>Employee Directory</h2>
                <FormControl onChange = {this.onChange} />
                <EmployeeList employeeData = {this.props.employeeData} 
                 onEmployeeClick = {this.props.onEmployeeClick} />
            </div>
        );
    }
}

export default indexPage