import axios from 'axios'
import React, { Component } from 'react'
import ApiHandler from '../utils/apiHandler';
import AuthHandler from '../utils/AuthHandler'

class CouncillorProfile extends Component {

    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this)
        this.formRef = React.createRef();
    }
    state = {
        errorRes: false,
        btnMessage: 0,
        errorMessageSuccess: '',
        errorMessageFail: '',
        sendData: false,
    };
    

    async formSubmit(event) {
        event.preventDefault();
        this.setState({ btnMessage: 1 });

        var api_handler = new ApiHandler();
        var response = await api_handler.saveCouncillorProfile(
            event.target.title.value,
            event.target.user.value,
            event.target.qualification.value,
            event.target.discipline.value,
            event.target.years_of_experience.value,
            event.target.birthday.value,
            event.target.gender.value,
            event.target.address.value,
            event.target.phone_number.value,
            event.target.country.value,
            event.target.profile_picture.files[0]
        );
        console.log(response)
        //this.formRef.current.reset();
        this.setState({ btnMessage: 0 });
        this.setState({ errorRes: false });
        this.setState({ errorMessageSuccess: 'Councillor Profile Added Successfully!!!' });
        this.setState({ errorMessageFail: 'Failed To Add Councillor Profile!!!' });
        this.setState({ sendData: true });
        document.querySelectorAll('input').values='';

    }
    render() {
        var username = AuthHandler.getUsername();

        return (
            <section className='content'>
                <div className='container-fluid'>
                    <div className='block-header'>
                        <h2>Create Adviser Profile #{username}</h2>
                    </div>

                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>Title:</label>
                            <select name='title'>
                                <option value='Prof'>Prof</option>
                                <option value='Dr'>Dr</option>
                                <option value='Engr'>Engr</option>
                                <option value='Mr'>Mr</option>
                                <option value='Mrs'>Mrs</option>
                            </select>
                        </div>

                        <div className="form-group">
                        <label>User:</label>
                            <input 
                                type='text'
                                name='user'
                                className="form-control"
                                value={username}
                                readOnly={true}
                            />
                        </div>

                        <div className="form-group">
                            <label>Qualification:</label>
                            <input type="text" 
                                name='qualification'
                                className="form-control"
                                placeholder='Enter Your Highest Qualification...'
                            />
                        </div>

                        <div className="form-group">
                            <label>Discipline:</label>
                            <input type="text" 
                                name='discipline'
                                className="form-control"
                                placeholder='Enter Your Area of Specicialization...'
                            />
                        </div>

                        <div className="form-group">
                            <label>Years of Experience:</label>
                            <input type="text" 
                                name='years_of_experience'
                                className="form-control"
                                placeholder='How many years of experience do you have?'
                            />
                        </div>

                        <div className="form-group">
                            <label>Birthday:</label>
                            <input type="date" 
                                name='birthday'
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Gender:</label>
                            <select name='gender'>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" 
                                name='address'
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" 
                                name='phone_number'
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" 
                                name='country'
                                className="form-control"
                            />
                        </div>

                        <label>Profile Picture:</label>
                        <input 
                            type='file' 
                            name='profile_picture' 
                            className='form-control' 
                        />
                    
                    <button 
                        type="submit" 
                        className="btn btn-block btn-lg bg-pink waves-effect"
                        disabled={this.state.btnMessage == 0 ? false : true}
                    >
                        {this.state.btnMessage == 0 ? 'Add Councillor Profile' : 'Adding Councillor Profile. Please Wait ...'}
                    </button>

                    {this.state.errorRes == false && this.state.sendData == true ? (
                        <div className="alert alert-success">
                            <strong>Success!</strong> {this.state.errorMessageSuccess}.
                        </div>
                    ) : (
                        ""
                    )}

                    {this.state.errorRes == true && this.state.sendData == true ? (
                        <div className="alert alert-danger">
                            <strong>Failed!</strong>
                            {this.state.errorMessageFail}.
                        </div>
                        ) : (
                            ""
                    )}
                    </form>
                </div>
            </section>
        )
    }
}

export default CouncillorProfile
