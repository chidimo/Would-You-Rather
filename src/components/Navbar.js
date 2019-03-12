import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../actions/authUser'

const Navbar = (props) => {
    const { auth_user, dispatch } = props

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <NavLink to='/' className='navbar-brand'>
                Would You Rather
            </NavLink>

            { auth_user &&
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='/add' className='nav-link'>
                                New Poll
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/leaderboard' className='nav-link'>
                                Leaderboard
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to='/' className='nav-link'>
                                {auth_user}
                            </NavLink>
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
