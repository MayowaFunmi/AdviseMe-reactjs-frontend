import React from 'react'

const CheckBox = props => {
    return (
        
        <input key={props.id}  type='checkbox' value={props.course_name} />
    )
}

export default CheckBox