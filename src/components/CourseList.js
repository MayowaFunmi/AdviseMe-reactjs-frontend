import React, { Component } from 'react'
import AllCourseList from './AllCourseList'

class CourseList extends Component {

    constructor() {
        super()
    
        this.state = {
             courses: []
        }
    }

    componentDidMount() {
        this.fetchCourses()
    }

    fetchCourses() {
        fetch('http://127.0.0.1:8000/users/all_course_list')
        .then(response => response.json())
        .then(data =>
            this.setState({
                courses: data
            })
        )
        .catch(function(error) {
            console.log('ERROR: ', error)
        })
    }
    
    render() {

        var courses = this.state.courses;

        return (
            <div>
                {courses.map(course => {
                    return(
                        <div key={course.id}>
                            <AllCourseList
                                id={course.id}
                                semester={course.semester}
                                course_code={course.course_code}
                                course_name={course.course_name}
                                course_type={course.course_type}
                                course_unit={course.course_unit}
                                minimum_credit={course.minimum_credit}
                                maximum_credit={course.maximum_credit}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CourseList
