import React, { Component } from 'react'
import axios from 'axios';

class SignUp extends Component {
    constructor() {
        super()
    
        this.state = {
            registrations: [],
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
        .then(response => response.json())
        .then((data) => 
            this.setState({
                registrations: data
            })
        );
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
                alert('Registration Successful');
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert('Registration Failed. Please try again/')
                this.resetForm()
            }
        })
    }

    resetForm() {
        this.setState({
            username: '', password: '', password2: '', registration_number: '',email: '', first_name: '', last_name:''
        })
    }

    inputChanged = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    render() {
        var reg = this.state.registrations;
        return (
            <div>
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
                
                <form method='POST' onSubmit={this.fetchSubmit}>
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
        )
    }
}

export default SignUp
