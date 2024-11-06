import React, { useState, useEffect } from 'react';
import '../AdminButtons.css'; // Assuming styles are in a CSS file

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
        <div>
            {/* Button container for Add, Edit, and Delete Employee */}
            <div className="button-container">
                <button onClick={handleAddClick} className="btn add-btn">
                    {showForm ? 'Cancel' : 'Add Employee'}
                </button>
                <button onClick={handleEditClick} className="btn edit-btn">
                    Edit Employee
                </button>
                <button onClick={handleDeleteClick} className="btn delete-btn">
                    Delete Employee
                </button>
            </div>

            {/* List of Employees */}
            <ul>
                {employeeList.map((emp, index) => (
                    <li key={index}>
                        <p>{emp.name} - {emp.designation}</p>
                        <button onClick={() => handleEditClick(index)} className="btn edit-btn">Edit</button>
                        <button onClick={() => handleDeleteClick(index)} className="btn delete-btn">Delete</button>
                    </li>
                ))}
            </ul>

            {/* Conditional rendering of form */}
            {showForm && (
                <div className="form-container">
                    <form onSubmit={handleFormSubmit} className="employee-form">
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={employee.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Mobile:
                            <input
                                type="text"
                                name="mobile"
                                value={employee.mobile}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Age:
                            <input
                                type="number"
                                name="age"
                                value={employee.age}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Designation:
                            <input
                                type="text"
                                name="designation"
                                value={employee.designation}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            Salary:
                            <input
                                type="number"
                                name="salary"
                                value={employee.salary}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <button type="submit" className="btn submit-btn">
                            {employee.name ? 'Update' : 'Submit'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default AdminButtons;
