import React from "react"
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap'

class EmployeeCard extends React.Component {
    render() {
        const employeeHeader = <employeeHeader employee = {this.props.employee}/>
        const {contact} = this.props.employee

        return (
            <Panel bsClass = "employee-card" header = {employeeHeader}>
                <ListGroup>
                    <ListGroupItem> {data.name} </ListGroupItem>
                    <ListGroupItem> {data.title} </ListGroupItem>
                    <ListGroupItem> {contact.office} </ListGroupItem>
                    <ListGroupItem> {contact.email} </ListGroupItem>
                </ListGroup>
            </Panel>
        )
    }
}

export default EmployeeCard