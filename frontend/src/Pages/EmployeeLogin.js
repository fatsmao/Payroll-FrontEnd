import React from 'react';
import './EmployeeLogin.css';

function EmployeeLogin() {
  return (
    <div className='login'>
        <div className='login-card'>
            <div className='login-page'>

                <h2>Employee Login</h2>
                <div className='id'>
                    <label htmlFor='adminid' className='adminid'>Enter your Employee ID</label><br/>
                    <input type='text' placeholder='E.g. A123'></input><br/>
                </div>

                <div className='pw'>
                    <label htmlFor="password" className="password">Enter a password</label><br/>
                    <input type="password" placeholder="****"></input>
                </div>

                <div className='button'>Log In</div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeLogin;