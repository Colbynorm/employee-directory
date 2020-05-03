import React from "react"

class EmployeeList extends React.Component {
    onClick = () => {
        this.props.onEmployeeClick(this.props.employee)
    }

    render() {
        const {name, title, contact} = this.props.employee
        return (
            <div className = "employeeItem">
                <div className = "employee">
                    <h2> {name} </h2>
                    <h3> {title} </h3>
                    <p> {contact} </p>
                </div>
            </div>
        )
    }
}

export default EmployeeList