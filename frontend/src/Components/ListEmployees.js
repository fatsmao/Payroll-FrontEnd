import React, {useState} from 'react';
import axios from 'axios';

function ListEmployees() {
    const [employee, setEmployee] = useState('');
    const listEmployees = () => {
        axios.get('http://localhost:8080/Employees').then((response) => {
            setEmployee(response)
        })
    }
 
    return (
        <div>
        <ul>employee.map(<li>{employee}</li>)</ul>
        </div>
    )
}

export default ListEmployees;
