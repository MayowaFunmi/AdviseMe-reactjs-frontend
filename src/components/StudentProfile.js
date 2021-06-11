import axios from 'axios'
import React, { Component } from 'react'
import ApiHandler from '../utils/apiHandler'
import AuthHandler from '../utils/AuthHandler'

class StudentProfile extends Component {

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
        all_students: [],
    };
    
    componentDidMount() {
        this.fetchStudents();
    }
    async formSubmit(event) {
        event.preventDefault();
        this.setState({ btnMessage: 1 });

        var api_handler = new ApiHandler();
        var response = await api_handler.saveStudentProfile(
            //this.props.match.params.id,
            event.target.user.value,
            event.target.middle_name.value,
            event.target.course.value,
            event.target.student_level.value,
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
        this.setState({ errorMessageSuccess: 'Student Profile Added Successfully!!!' });
        this.setState({ errorMessageFail: 'Failed To Add Student Profile!!!' });
        this.setState({ sendData: true });

    }

    async fetchStudents() {
        var api_handler = new ApiHandler();
        var studentdata = await api_handler.fetchAllStudents();
        console.log(studentdata)
        this.setState({
            all_students: studentdata.data
        })
    }

    render() {
        var username = AuthHandler.getUsername();

        return (
            <section className='content'>
                <div className='container-fluid'>
                    <div className='block-header'>
                        <h2>Create Student Profile # {username}</h2>
                    </div>

                    <form onSubmit={this.formSubmit}>
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
                        <label>Middle Name:</label>
                        <input type="text" 
                            name='middle_name'
                            className="form-control"
                            placeholder='Enter your middle name...'
                        />
                    </div>

                    <div className="form-group">
                        <label>Course of study:</label>
                        <input type="text" 
                            name='course'
                            className="form-control"
                            placeholder='Enter your course of study...'
                        />
                    </div>

                    <div className="form-group">
                        <label>Level:</label>
                        <input type="text" 
                            name='student_level'
                            className="form-control"
                            placeholder='Enter your level...'                            
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
                        {this.state.btnMessage == 0 ? 'Add Student Profile' : 'Adding Student Profile. Please Wait ...'}
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

export default StudentProfile
