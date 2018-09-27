import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchSpecificCourse} from './../../actions/courseActions';

import './CourseDetails.css'

class CourseDetails extends Component {

    componentDidMount() {
        console.log(this.props.match.params.title);
        this.props.fetchSpecificCourse(this.props.match.params.title);
    }

    render() {
        return (
            <div className="col-12 w-100 h-100 p-0">
                <div className="col-8 p-5 h-100 d-inline-block container">

                    {this.props.courseData ? <div className="course-desc" dangerouslySetInnerHTML={{__html: this.props.courseData.desc}} /> : null}

                </div>
                <div className="col-4 py-4 px-5 course-details position-fixed h-100 d-inline-block">
                    <h3>{this.props.courseData ? this.props.courseData.title : null}</h3>
                    {this.props.courseData ? <div className="w-100 mt-3">
                        <img className="w-100" src={this.props.courseData.img} alt={this.props.courseData.title}/>
                        <p className="lead mt-3">Category: <span className="font-weight-bold">{this.props.courseData.category}</span></p>
                        <p className="lead mt-3">Tags: {this.props.courseData.tags.map(tag => <span className="bg-dark py-1 px-2 m-1">{tag}</span>)}</p>
                        <a href={this.props.courseData.torrent_link} className="btn btn-primary mt-3 w-100 p-3">Get This Course</a>
                        {/*<button className="btn btn-primary mt-3 w-100 p-3">Join Study Group</button>*/}
                    </div> : null}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    courseData: state.courses.courseData
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchSpecificCourse
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CourseDetails));