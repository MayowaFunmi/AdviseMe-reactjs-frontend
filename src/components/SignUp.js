import React, { Component } from 'react'
import axios from 'axios';
import ApiHandler from '../utils/apiHandler';
import Config from '../utils/Config';

class SignUp extends Component {
    constructor() {
        super()
        this.fetchSubmit = this.fetchSubmit.bind(this)
    }

    async fetchSubmit(event) {
        console.log('working')
        event.preventDefault();

        var api_handler = new ApiHandler();
        var response = await api_handler.signUp(
            event.target.status.value,
            event.target.username.value,
            event.target.password.value,
            event.target.password2.value,
            event.target.registration_number.value,
            event.target.email.value,
            event.target.first_name.value,
            event.target.last_name.value,
        );
        window.location = "/";   // redirect to login page after signup
    }
    
    render() {
        return (
            <div className='signup-page'>
                <div className='signup-box'>
                    <div className='logo'>
                        <h1>Sign Up Form</h1>
                    </div>

                    <div className='card'>
                        <div className='body'>
                        <form onSubmit={this.fetchSubmit} method='POST'>
                            <div className="form-group">
                                <label>Status:</label>
                                <select name='status'>
                                    <option value='Student'>Student</option>
                                    <option value='Course Adviser'>Course Adviser</option>
                                </select>
                            </div>

                            <div className='form-group'>
                                <label>Username:</label>
                                <input 
                                    type='text'
                                    name='username'
                                    className="form-control"
                                />
                            </div>

                            <div className='form-group'>
                                <label>Password:</label>
                                <input 
                                    type='password'
                                    name='password'
                                    className="form-control"
                                />
                            </div>

                            <div className='form-group'>
                                <label>Confirm Password:</label>
                                <input 
                                    type='password'
                                    name='password2'
                                    className="form-control"
                                />
                            </div>

                            <div className='form-group'>
                                <label>Registration Number:</label>
                                <input 
                                    type='text'
                                    name='registration_number'
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address:</label>
                                <input type="email" 
                                    name='email'
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label>First Name:</label>
                                <input type="text" 
                                    name='first_name'
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label>Last Name:</label>
                                <input type="text" 
                                    name='last_name'
                                    className="form-control"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                    
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
