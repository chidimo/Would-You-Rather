import React from 'react';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth_user } = props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Would You Rather</a>

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
                    <li className="nav-item">
                        <a className="nav-link" href="/">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps({ auth_user }) {
    return {
        auth_user
    }
}

export default connect(mapStateToProps)(Navbar)
