import axios from 'axios'
import React, { Component } from 'react'
import AuthHandler from '../utils/AuthHandler'

class CouncillorProfile extends Component {

    constructor() {
        super()
    
        this.state = {
            id: '',
            title: '',
            qualification: '',
            discipline: '',
            years_of_experience: '',
            birthday: '',
            gender: '',
            address: '',
            phone_number: '',
            country: '',
            profile_picture: null,
        }

        this.inputChanged = this.inputChanged.bind(this)
        this.imageChanged = this.imageChanged.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    inputChanged = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    imageChanged = e => {
        this.setState({profile_picture:e.target.files[0]});   
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('title', this.state.title);
        form_data.append('qualification', this.state.qualification);
        form_data.append('discipline', this.state.discipline);
        form_data.append('years_of_experience', this.state.years_of_experience);
        form_data.append('birthday', this.state.birthday);
        form_data.append('gender', this.state.gender);
        form_data.append('address', this.state.address);
        form_data.append('phone_number', this.state.phone_number);
        form_data.append('country', this.state.country);
        form_data.append('profile_picture', this.state.profile_picture, this.state.profile_picture.name);

        let url = 'http://127.0.0.1:8000/users/create_councillor_profile/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    render() {
        //console.log(AuthHandler.getLoginToken());

        return (
            <section className='content'>
                <div className='container-fluid'>
                    <div className='block-header'>
                        <h2>Create Adviser Profile</h2>
                    </div>

                    <form onSubmit={this.handleSubmit} id='form' encType='"multipart/form-data'>
                        <div className="form-group">
                            <label>Title:</label>
                            <select name='title' value={this.state.title} onChange={this.inputChanged}>
                                <option value='Prof'>Prof</option>
                                <option value='Dr'>Dr</option>
                                <option value='Engr'>Engr</option>
                                <option value='Mr'>Mr</option>
                                <option value='Mrs'>Mrs</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Qualification:</label>
                            <input type="text" 
                                name='qualification'
                                className="form-control"
                                placeholder='Enter Your Highest Qualification...'
                                value={this.state.qualification}
                                onChange={this.inputChanged}
                            />
                        </div>

                        <div className="form-group">
                            <label>Discipline:</label>
                            <input type="text" 
                                name='discipline'
                                className="form-control"
                                placeholder='Enter Your Area of Specicialization...'
                                value={this.state.discipline}
                                onChange={this.inputChanged}
                            />
                        </div>

                        <div className="form-group">
                            <label>Years of Experience:</label>
                            <input type="text" 
                                name='years_of_experience'
                                className="form-control"
                                placeholder='How many years of experience do you have?'
                                value={this.state.years_of_experience}
                                onChange={this.inputChanged}
                            />
                        </div>

                        <div className="form-group">
                            <label>Birthday:</label>
                            <input type="date" 
                                name='birthday'
                                className="form-control"
                                value={this.state.birthday}
                                onChange={this.inputChanged}
                            />
                        </div>

                        <div className="form-group">
                            <label>Gender:</label>
                            <select name='gender' value={this.state.gender} onChange={this.inputChanged}>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" 
                                name='address'
                                className="form-control"
                                value={this.state.address}
                                onChange={this.inputChanged}
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" 
                                name='phone_number'
                                className="form-control"
                                value={this.state.phone_number}
                                onChange={this.inputChanged}
                            />
                        </div>

                        <div className="form-group">
                            <label>Country</label>
                            <input type="text" 
                                name='country'
                                className="form-control"
                                value={this.state.country}
                                onChange={this.inputChanged}
                            />
                        </div>

                        <label>Profile Picture:</label>
                        <input 
                            type='file' 
                            name='profile_picture' 
                            className='form-control' 
                            onChange={this.imageChanged}
                        />
                    
                        <button type="submit" className="btn btn-block btn-lg bg-pink waves-effect">Save Profile</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default CouncillorProfile
