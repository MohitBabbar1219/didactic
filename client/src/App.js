import React, {Component} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import Aux from './hoc/Aux';
import Header from './components/Header';
import Dashboard from './containers/Dashboard';
import Catalogue from './containers/Catalogue';
import CourseDetails from './containers/CourseDetails';

import {fetchUser} from './actions/authActions';


// const Course = () => <h1>Course</h1>;
// const Courses = () => <h1>Courses</h1>;
const Landing = () => <h1>Landing</h1>;

class App extends Component {


    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
                <Aux>
                    <Header/>
                    <Aux>
                        <div className="position-absolute main-view w-100">
                            <Switch>
                                <Route path={"/"} exact component={Landing}/>
                                <Route path={"/dashboard"} exact component={Dashboard}/>
                                {/*<Route path={"/courses"} exact component={Catalogue}/>*/}
                                <Route path={"/courses"} exact component={Catalogue}/>
                                <Route path={"/course/:title"} exact component={CourseDetails}/>
                            </Switch>
                        </div>
                    </Aux>
                </Aux>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    userDetails: state.auth.userDetails
});


const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
