import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
class Navigation extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        Salva al planeta
                        </Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/set">Controlar dispositivo</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}
Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Navigation);
