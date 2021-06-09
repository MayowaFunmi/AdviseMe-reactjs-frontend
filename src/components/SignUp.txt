import React, { Component } from 'react'
import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super()
    
        this.state = {
            registrations: [],
            status: '',
            username: '',
            password: '',
            password2: '',
            registration_number: '',
            email: '',
            first_name: '',
            last_name: ''
        }
        this.inputChanged = this.inputChanged.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchSubmit = this.fetchSubmit.bind(this)

    }

    // using fetch == used
    fetchSubmit(e) {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/users/register/', {
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then(function(response) {
            if (response.status === 200) {
                window.location = '/';   // redirect to login page after signup
            }
        })
        //.then(response => response.json())
        //.then((data) => this.setState({registrations: data}))
        .catch(function(error) {
            console.log('ERROR: ', error)
        })
        this.resetForm()
    }

    // using axios
    handleSubmit(e){
        e.preventDefault();
        axios({
            method: 'POST',
            url:'http://127.0.0.1:8000/users/register/',
            data: this.state
        }).then((response)=> {
            if (response.data.status === 'success') {
                window.location = '/';   // redirect to login page after signup
            } else if (response.data.status === 'fail') {
                alert('Registration Failed. Please try again/')
                this.resetForm()
            }
        })
    }

    resetForm() {
        this.setState({
            status: '', username: '', password: '', password2: '', registration_number: '',email: '', first_name: '', last_name:''
        })
    }

    inputChanged = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    render() {
        var reg = this.state.registrations;
        // upon registration, redirect to dashboard
        return (
            <div className='signup-page'>
                {/*
                <div>
                    {reg.map(myreg => {
                        return(
                            <div key={myreg.id}>
                                <h2>Your Registration details are as follows:</h2>
                                <p>
                                    Username: {myreg.username}
                                    Registration Number: {myreg.registration_number}
                                    Email: {myreg.email}
                                    First Name: {myreg.first_name}
                                    Last Name: {myreg.last_name}
                                </p>
                            </div>
                        )
                    })}
                </div>
                */}
                <div className='signup-box'>
                    <div className='logo'>
                        <h1>Sign Up Form</h1>
                    </div>

                    <div className='card'>
                        <div className='body'>
                        <form id='sign_up' method='POST' onSubmit={this.fetchSubmit}>
                            <div className="form-group">
                                <label>Status:</label>
                                <select name='status' value={this.state.status} onChange={this.inputChanged}>
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
                                    value={this.state.username}
                                    onChange={this.inputChanged}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Password:</label>
                                <input 
                                    type='password'
                                    name='password'
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.inputChanged}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Confirm Password:</label>
                                <input 
                                    type='password'
                                    name='password2'
                                    className="form-control"
                                    value={this.state.password2}
                                    onChange={this.inputChanged}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Registration Number:</label>
                                <input 
                                    type='text'
                                    name='registration_number'
                                    className="form-control"
                                    value={this.state.registration_number}
                                    onChange={this.inputChanged}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address:</label>
                                <input type="email" 
                                    name='email'
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.inputChanged}
                                />
                            </div>

                            <div className="form-group">
                                <label>First Name:</label>
                                <input type="text" 
                                    name='first_name'
                                    className="form-control"
                                    value={this.state.first_name}
                                    onChange={this.inputChanged}
                                />
                            </div>

                            <div className="form-group">
                                <label>Last Name:</label>
                                <input type="text" 
                                    name='last_name'
                                    className="form-control"
                                    value={this.state.last_name}
                                    onChange={this.inputChanged}
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
