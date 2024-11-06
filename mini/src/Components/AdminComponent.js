import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminButtons() {
    const [showForm, setShowForm] = useState(false);
    const [employee, setEmployee] = useState({
        name: '',
        mobile: '',
        age: '',
        designation: '',
        salary: ''
    });
    const [employeeList, setEmployeeList] = useState([]);

    // Load employees from localStorage on component mount
    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployeeList(storedEmployees);
    }, []);

    // Toggle form visibility
    const handleAddClick = () => {
        setShowForm(!showForm);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value
        }));
    };

    // Submit form and add employee to localStorage
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedEmployeeList = [...employeeList, employee];
        localStorage.setItem('employees', JSON.stringify(updatedEmployeeList));
        setEmployeeList(updatedEmployeeList);
        setEmployee({ name: '', mobile: '', age: '', designation: '', salary: '' });
        setShowForm(false);
    };

    // Edit an existing employee
    const handleEditClick = (index) => {
        const selectedEmployee = employeeList[index];
        setEmployee(selectedEmployee);
        setShowForm(true);
        const updatedEmployeeList = employeeList.filter((_, idx) => idx !== index);
        localStorage.setItem('employees', JSON.stringify(updatedEmployeeList));
    };

    // Delete an employee
    const handleDeleteClick = (index) => {
        const updatedEmployeeList = employeeList.filter((_, idx) => idx !== index);
        localStorage.setItem('employees', JSON.stringify(updatedEmployeeList));
        setEmployeeList(updatedEmployeeList);
    };

    return (
        <div className="container my-4">
            {/* Button container for Add, Edit, and Delete Employee */}
            <div className="d-flex justify-content-between mb-3">
                <button onClick={handleAddClick} className="btn btn-primary">
                    {showForm ? 'Cancel' : 'Add Employee'}
                </button>
                <button 
                    onClick={() => handleEditClick(0)} 
                    className="btn btn-warning" 
                    disabled={employeeList.length === 0}>
                    Edit Employee
                </button>
                {employeeList.length > 0 && (
                    <button 
                        onClick={() => handleDeleteClick(0)} 
                        className="btn btn-danger">
                        Delete Employee
                    </button>
                )}
            </div>

            {/* List of Employees */}
            <ul className="list-group mb-3">
                {employeeList.map((emp, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{emp.name} - {emp.designation}</span>
                        <div>
                            <button 
                                onClick={() => handleEditClick(index)} 
                                className="btn btn-sm btn-outline-warning mx-1">
                                Edit
                            </button>
                            <button 
                                onClick={() => handleDeleteClick(index)} 
                                className="btn btn-sm btn-outline-danger">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Conditional rendering of form */}
            {showForm && (
                <div className="card p-4">
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={employee.name}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile:</label>
                            <input
                                type="text"
                                name="mobile"
                                value={employee.mobile}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Age:</label>
                            <input
                                type="number"
                                name="age"
                                value={employee.age}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Designation:</label>
                            <input
                                type="text"
                                name="designation"
                                value={employee.designation}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salary:</label>
                            <input
                                type="number"
                                name="salary"
                                value={employee.salary}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            {employee.name ? 'Update' : 'Submit'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AdminButtons;
