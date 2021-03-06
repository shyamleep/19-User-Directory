import React from "react";
// import Search from "../Search/Search.js";
import Table from "react-bootstrap/Table";

function SearchResults(props) {
    return (
        <div className="tableDiv">
            {/* props.children */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employeeList.map((employee, i) => (
                        <tr key={i}>
                            <td><img src={employee.picture.medium} alt={employee.name.first}/></td>
                            <td>{employee.name.first} {employee.name.last}</td>
                            <td>{employee.location.city} {employee.location.state}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
};

export default SearchResults;