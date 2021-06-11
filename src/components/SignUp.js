import React, { Component } from 'react'
import axios from 'axios';
import ApiHandler from '../utils/apiHandler';
import Config from '../utils/Config';
import GoogleFontLoader from 'react-google-font-loader';

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
            <React.Fragment>
            <GoogleFontLoader
              fonts={[
                {
                  font: "Roboto",
                  weights: [400, 700],
                },
              ]}
              subsets={["latin", "cyrillic-ext"]}
            />
            <GoogleFontLoader
              fonts={[
                {
                  font: "Material+Icons",
                },
              ]}
            />

            <div className='signup-page ls-closed'>
                <div className='signup-box'>
                    <div className='logo'>
                        <h1>Sign Up Form</h1>
                    </div>

                    <div className='card'>
                        <div className='body'>
                        <form id='sign_up' onSubmit={this.fetchSubmit} method='POST'>
                            <div className="input-group">
                                <label>Status:</label>
                                <select name='status'>
                                    <option value='Student'>Student</option>
                                    <option value='Course Adviser'>Course Adviser</option>
                                </select>
                            </div>

                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i class="material-icons">person</i>
                                </span>
                                <div className='form-line'>
                                    <input 
                                        type='text'
                                        name='username'
                                        className="form-control"
                                        placeholder='Enter your Username'
                                    />
                                </div>
                            </div>

                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i class="material-icons">lock</i>
                                </span>
                                <div className='form-line'>
                                    <input 
                                        type='password'
                                        name='password'
                                        className="form-control"
                                        placeholder='Enter Your Password'
                                />
                                </div>
                            </div>

                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i class="material-icons">lock</i>
                                </span>
                                <div className='form-line'>
                                    <input 
                                        type='password'
                                        name='password2'
                                        className="form-control"
                                        placeholder='Confirm Your Password'
                                />
                                </div>
                            </div>

                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i class="material-icons">person</i>
                                </span>
                                <div className='form-line'>
                                    <input 
                                        type='text'
                                        name='registration_number'
                                        className="form-control"
                                        placeholder='Enter Your Student Registration Number'
                                />
                                </div>
                            </div>

                            <div className="input-group">
                                <span className='input-group-addon'>
                                    <i class="material-icons">email</i>
                                </span>
                                <div className='form-line'>
                                    <input type="email" 
                                        name='email'
                                        className="form-control"
                                        placeholder='Enter Your Email Address'
                                />
                                </div>
                                
                            </div>

                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i class="material-icons">person</i>
                                </span>
                                <div className='form-line'>
                                    <input 
                                        type='text'
                                        name='first_name'
                                        className="form-control"
                                        placeholder='Enter Your First Name'
                                />
                                </div>
                            </div>

                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i class="material-icons">person</i>
                                </span>
                                <div className='form-line'>
                                    <input 
                                        type='text'
                                        name='last_name'
                                        className="form-control"
                                        placeholder='Enter Your Last Name'
                                />
                                </div>
                            </div>

                            <button class="btn btn-block btn-lg bg-pink waves-effect" type="submit">SIGN UP</button>
                    
                        </form>
                        </div>
                    </div>
                </div>
            </div>
          </React.Fragment>
        )
    }
}

export default SignUp
