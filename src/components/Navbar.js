import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/authUser'

const Navbar = (props) => {
    const { auth_user, dispatch } = props

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Would You Rather</a>

            { auth_user &&
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">New question</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Leader board</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">{auth_user}</a>
                        </li> 
                        <button className="btn btn-sm btn-secondary" href="#" onClick={() => dispatch(logout())}>Logout</button>
                </ul>
            </div>
            }
        </nav>
    )
}

function mapStateToProps({ auth_user }) {
    return {
        auth_user
    }
}

export default connect(mapStateToProps)(Navbar)
