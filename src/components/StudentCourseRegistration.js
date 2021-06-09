import React, { Component } from 'react'
import ApiHandler from '../utils/apiHandler';
import AuthHandler from '../utils/AuthHandler';
import "adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css";
import "adminbsb-materialdesign/plugins/node-waves/waves.css";
import "adminbsb-materialdesign/plugins/animate-css/animate.css";
import "adminbsb-materialdesign/plugins/waitme/waitMe.css";
import "adminbsb-materialdesign/plugins/bootstrap-select/css/bootstrap-select.css";
import "adminbsb-materialdesign/css/style.css";
import "adminbsb-materialdesign/css/themes/all-themes.css";

//import "adminbsb-materialdesign/plugins/jquery/jquery.js";
//import "adminbsb-materialdesign/plugins/jquery/jquery.min.js";
//import "adminbsb-materialdesign/plugins/bootstrap/js/bootstrap.js";
//import "adminbsb-materialdesign/plugins/jquery-slimscroll/jquery.slimscroll.js";
//import "adminbsb-materialdesign/plugins/node-waves/waves.js";
//import "adminbsb-materialdesign/plugins/autosize/autosize.js";
//import "adminbsb-materialdesign/plugins/momentjs/moment.js";

//import "adminbsb-materialdesign/js/admin.js";
//import "adminbsb-materialdesign/js/pages/forms/basic-form-elements.js";
//import "adminbsb-materialdesign/js/demo.js"



class StudentCourseRegistration extends Component {

    
    constructor(props) {
        super(props)
    
        this.state = {
            allCoursesList: [],
            dataLoaded: false,
            btnMessage: 0,
            errorRes: false,
            errorMessageSuccess: '',
            errorMessageFail: '',
            sendData: false,
        };
    }
    
    componentDidMount() {
        this.fetchCourses();
    }

    async fetchCourses() {
        var api_handler = new ApiHandler();
        var all_courses = await api_handler.fetchAllCourses();
        //console.log(all_courses);
        this.setState({ allCoursesList: all_courses.data });
        this.setState({ dataLoaded: true })
        console.log(this.state.allCoursesList)
    }

    render() {

        var username = AuthHandler.getUsername();
        var courses = this.state.allCoursesList;

        return (
            <section className='content'>
                <div className='container=fluid'>
                    <div className='block-header'>
                        <h2>STUDENT REGISTRATION COURSE FORM</h2>
                    </div>

                    <div className='row clearfix'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className='card'>
                                <div className='header'>
                                    <h2>Fill the form below to register for your courses for this semester.</h2>
                                </div>

                                <div className='body'>
                                    <form>
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
                                        {/* 
                                        <div className="form-group">
                                            <label>Semester:</label>
                                            <select name='semester'>
                                                {this.state.allCoursesList.map((course) => (
                                                    <option key={course.id} value='{course.course_name} ({course.course_code})'>{course.course_name} ({course.course_code})</option>
                                                ))}
                                            </select>
                                        </div>
                                        */}

                                        <div className="form-group">
                                            <label htmlFor='basic_checkbox_2'>Choose Course:</label>
                                            {this.state.allCoursesList.map((course) => {
                                                return(
                                                    <div className='demo-checkbox' key={course.id}>
                                                        <input type='checkbox' id='basic_checkbox_2' className='filled-in' value={course.course_name}/>{course.course_name} ({course.course_code}) &nbsp;&nbsp;
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="btn btn-primary m-t-15 waves-effect btn-block"
                                            disabled={this.state.btnMessage == 0 ? false : true}
                                        >
                                            {this.state.btnMessage == 0 ? 'Add Courses' : 'Adding Courses. Please Wait ...'}
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

                                    <div className='row clearfix'>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className='card'>
                                                <div className='header'>
                                                    <h2>All Available Courses</h2>
                                                    <small>There are currently {courses.length} courses available to choose from</small>
                                                </div>
                                                <div className='body table-responsive'>
                                                    <table className='table table-hover'>
                                                        <thead>
                                                            <tr>
                                                                <th>#ID</th>
                                                                <th>SEMESTER</th>
                                                                <th>COURSE CODE</th>
                                                                <th>COURSE NAME</th>
                                                                <th>COURSE TYPE</th>
                                                                <th>UNIT</th>
                                                                <th>MIN. CREDIT</th>
                                                                <th>MAX. CREDIT</th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {this.state.allCoursesList.map((course) => (
                                                                <tr key={course.id}>
                                                                    <td>{course.id}</td>
                                                                    <td>{course.semester}</td>
                                                                    <td>{course.course_code}</td>
                                                                    <td>{course.course_name}</td>
                                                                    <td>{course.course_type}</td>
                                                                    <td>{course.course_unit}</td>
                                                                    <td>{course.minimum_credit}</td>
                                                                    <td>{course.maximum_credit}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default StudentCourseRegistration
