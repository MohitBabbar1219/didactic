import React, {Component} from 'react';
import Aux from './../../hoc/Aux';
import Course from './../../components/Course';
import './Catalogue.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import {fetchCourses, setCourseDataNull, fetchCoursesByCategory} from './../../actions/courseActions';

class Catalogue extends Component {

    state = {
        pageNum: 1,
        categorySelected: null
    };

    componentDidMount() {
        this.props.fetchCourses(this.state.pageNum);
    }

    courseButtonClick = (str) => {
        this.props.setCourseDataNull();
        this.props.history.push("/course/" + encodeURI(str));
    };

    fetchByCategory = (category) => {
        if (category === this.state.categorySelected) {
            this.setState({pageNum: 1, categorySelected: null});
            this.props.fetchCourses(this.state.pageNum);
        } else {
            this.setState({pageNum: 1, categorySelected: category});
            this.props.fetchCoursesByCategory(category, 1);
        }
    };


    fetchNextSet = () => {
        if (this.state.categorySelected) {
            this.props.fetchCoursesByCategory(this.state.categorySelected, this.state.pageNum + 1);
            this.setState({pageNum: this.state.pageNum + 1});
        } else {
            this.props.fetchCourses(this.state.pageNum + 1);
            // this.props.emptyCurrentCourses();
            this.setState({pageNum: this.state.pageNum + 1});
        }
    };

    render() {
        return (
            <div className="p-0 bg-primary col-12 catalog-view">
                <div className="catalogue-category-view height-comps px-1 side-bar col-3 d-inline-block">
                    <div className="text-center">
                        <form className="form-inline my-2 my-lg-0 d-block">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="mt-3">
                        {[ 'Business',
                            'Marketing',
                            'IT & Software',
                            'Development',
                            'Personal Development',
                            'Design',
                            'Language',
                            'Academics',
                            'Health & Fitness',
                            'Office Productivity',
                            'Lifestyle',
                            'Photography',
                            'Music',
                            'Programming Languages',
                            'Test Prep' ].map((category, index) => <button style={this.state.categorySelected === category ?
                            {color: '#373b43', backgroundColor: '#d3d3d3',
                            border: '1px solid #373b43'} : null} onClick={() => this.fetchByCategory(category)} key={category + index} className="lead w-100 p-1 category-tab">{category}</button>)}
                    </div>
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
    setCourseDataNull,
    fetchCoursesByCategory
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Catalogue));