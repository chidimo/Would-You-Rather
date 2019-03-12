import React, { Component } from 'react'

import { connect } from 'react-redux';


class Board extends Component {

    render() {

        const { name, asked, answered, totalScore } = this.props

        return (
            <div className='board-card'>
                <h5 className='page-header'>Score card for {name}</h5>

                <img src={`https://robohash.org/${name}.png`} alt={`Avatar of ${name}`} className="avatar img-card"/>

                <div className='stats'>
                    <h6>Questions asked: {asked}</h6>
                    <h6>Questions answered: {answered}</h6>
                    <h4>{totalScore}</h4>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ auth_user }, { name, asked, answered, totalScore }) {

    return {
        auth_user,
        name,
        asked,
        answered,
        totalScore
    }
}

export default connect(mapStateToProps)(Board)
