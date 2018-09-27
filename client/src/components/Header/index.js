import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutUser} from './../../actions/authActions';
import './Header.css'

class Header extends Component {

    render() {

        const isLoggedIn = () => {
            if (this.props.userDetails == null) {
                return null
            } else if (!!this.props.userDetails) {
                return <li className="nav-item active">
                    <a style={{cursor: 'pointer'}} onClick={this.props.logoutUser} className="nav-link active text-light">Logout</a>
                </li>
            } else {
                return <li className="nav-item active">
                    <a className="nav-link active text-light" href="/api/auth/google">Login With Google</a>
                </li>
            }
        };

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark header position-fixed w-100">
                <div className="container-fluid ml-4">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">


                            {/*<form className="form-inline my-2 my-lg-0">*/}
                            {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
                            {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                            {/*</form>*/}

                            {isLoggedIn()}

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}
const mapStateToProps = state => ({
    userDetails: state.auth.userDetails
});

const mapDispatchToProps = dispatch => bindActionCreators({
    logoutUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
