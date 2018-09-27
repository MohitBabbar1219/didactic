import React, {Component} from 'react';
import Aux from './../../hoc/Aux';
import Course from './../../components/Course';
import './Catalogue.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import {fetchCourses, emptyCurrentCourses} from './../../actions/courseActions';

class Catalogue extends Component {

    state = {
        pageNum: 1
    };

    componentDidMount() {
        this.props.fetchCourses(this.state.pageNum);
        console.log(this.props.history);
    }

    courseButtonClick = (str) => {
        this.props.history.push("/api/course/" + str);
    };


    fetchNextSet = () => {
        this.props.fetchCourses(this.state.pageNum + 1);
        // this.props.emptyCurrentCourses();
        this.setState({pageNum: this.state.pageNum + 1});
    };

    render() {
        return (
            <div className="p-0 bg-primary col-12 catalog-view">
                <div className="catalogue-category-view height-comps side-bar col-3 d-inline-block">

                </div>
                <div className="col-9 py-3 height-comps d-inline-block catalogue-main-view">
                    {this.props.courses ? this.props.courses.map((course) => <Course onCourseButtonClick={() => this.courseButtonClick(course.title)} key={course.title} img={course.img} title={course.title}/>) : null}
                    <div className="d-inline-block text-center next-butt-courses">
                        <button onClick={this.fetchNextSet} className="btn btn-primary d-inline-block px-5">Next Page</button>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    courses: state.courses.courses
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchCourses,
    emptyCurrentCourses
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Catalogue));