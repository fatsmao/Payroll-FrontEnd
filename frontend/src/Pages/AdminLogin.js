import React from 'react';
import './AdminLogin.css';

function AdminLogin() {
  return (
    <div className='login'>
        <div className='login-card'>
            <div className='login-page'>

                <h2>Admin Login</h2>
                <div className='id'>
                    <label htmlFor='adminid' className='adminid'>Enter your Admin ID</label><br/>
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

export default AdminLogin;