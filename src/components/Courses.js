import React, { Component } from 'react'
import ApiHandler from '../utils/apiHandler'
import AuthHandler from '../utils/AuthHandler'

class Courses extends Component {

    constructor() {
        super()
    
        this.state = {
            all_courses: [],
            dataLoaded: false,
            btnMessage: 0,
            errorRes: false,
            errorMessageSuccess: '',
            errorMessageFail: '',
            sendData: false,
        }
        this.formSubmit = this.formSubmit.bind(this)

    }

    componentDidMount() {
        this.fetchCourses();
    }

    async formSubmit(event) {
        event.preventDefault()
        this.setState({ btnMessage: 1 });
        
        var api_handler = new ApiHandler();
        var response = api_handler.saveCourses(
            event.target.semester.value,
            event.target.course_code.value,
            event.target.course_name.value,
            event.target.course_type.value,
            event.target.course_unit.value,
            event.target.minimum_credit.value,
            event.target.maximum_credit.value,
        );
        this.setState({ btnMessage: 0 });
        this.setState({ errorRes: false });
        this.setState({ errorMessageSuccess: 'Course Added Successfully!!!' });
        this.setState({ errorMessageFail: 'Failed To Add Course!!!' });
        this.setState({ sendData: true });
    }

    async fetchCourses() {
        var api_handler = new ApiHandler();
        var coursedata = await api_handler.fetchAllCourses();
        this.setState({
            all_courses: coursedata.data
        })
    }
    
    render() {
        var courses = this.state.all_courses;
        
        return (
            <section className='content'>
                <div className='container-fluid'>
                    <div className='block-header'>
                        <h2>ADD COURSES</h2>
                    </div>
                </div>
                <form onSubmit={this.formSubmit} method="POST">
                    <div className="form-group">
                        <label>Semester:</label>
                        <select name='semester'>
                            <option value='First Semester'>First Semester</option>
                            <option value='Second Semester'>Second Semester</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Course Code:</label>
                        <input type="text" 
                            name='course_code'
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>Course Name:</label>
                        <input type="text" 
                            name='course_name'
                            className="form-control"
                            
                        />
                    </div>

                    <div className="form-group">
                        <label>Course Type:</label>
                        <select name='course_type'>
                            <option value='Core Course'>Core Course</option>
                            <option value='Elective Course'>Elective Course</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Course Unit:</label>
                        <input type="number" 
                            name='course_unit'
                            max='99'
                            className="form-control"
                            
                        />
                    </div>

                    <div className="form-group">
                        <label>Minimum Credit:</label>
                        <input type="number" 
                            name='minimum_credit'
                            className="form-control"
                            
                        />
                    </div>

                    <div className="form-group">
                        <label>Maximum Credit:</label>
                        <input type="number" 
                            name='maximum_credit'
                            className="form-control"
                            
                        />
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
                                <h2>All Courses</h2>
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
                                        {this.state.all_courses.map((course) => (
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
            </section>
        )
    }
}

export default Courses
