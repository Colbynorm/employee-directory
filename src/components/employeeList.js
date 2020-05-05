import React from "react";
import Table from 'react-bootstrap/Table'

class EmployeeList extends React.Component {
    // onClick = () => {
    //     this.props.onEmployeeClick(this.props.employee)
    // }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Office Number</th>
                        <th>Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employeeData.map(employee=>(
                    <tr className = "employeeItem">
                            <td> {employee.data.name} </td>
                            <td> {employee.data.title} </td>
                            <td> {employee.data.contact.office} </td>
                            <td> {employee.data.contact.email} </td>
                    </tr>))}
                </tbody>
            </Table>
        )
    }
}

export default EmployeeList