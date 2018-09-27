import React from 'react';
import './Course.css'

const course = (props) => (

    <div className="card card-custom d-inline-block">
        <img className="card-img-top" src={props.img} alt={props.title} />
        <div className="card-body">
            <h5 className="card-title course-heading">{props.title}</h5>
            <button onClick={props.onCourseButtonClick} className="btn btn-primary">Go to this course</button>
        </div>
    </div>
);

export default course;

