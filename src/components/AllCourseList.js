import React from 'react'

const AllCourseList = (props) => {
    return (
        <section className='content'>
            <div className='container-fluid'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">S/No</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Course Type</th>
                        <th scope="col">Course unit</th>
                        <th scope="col">Min Credit</th>
                        <th scope="col">Max Credit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td>{props.semester}</td>
                        <td>{props.course_code}</td>
                        <td>{props.course_name}</td>
                        <td>{props.course_type}</td>
                        <td>{props.course_unit}</td>
                        <td>{props.minimum_credit}</td>
                        <td>{props.maximum_credit}</td>

                    </tr>
                </tbody>
            </table>
            </div>
            
        </section>
    )
}

export default AllCourseList
