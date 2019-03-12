import React, { Component } from 'react'

import { connect } from 'react-redux';


class Board extends Component {

    render() {

        const { name, asked, answered, totalScore } = this.props

        return (
            <div className='board-card card'>
                <div className='author-card'>
                    <h5 className='page-header'>Score card for {name}</h5>
                    <img src={`https://robohash.org/${name}.png`} alt={`Avatar of ${name}`} className="avatar img-card"/>
                </div>

                <div className='row'>
                    <div className='col-sm-8'>
                        <h6>Created questions: {asked}</h6>
                        <hr/>
                        <h6>Answered questions: {answered}</h6>
                    </div>
                    
                    <div className='col-sm-4'>
                        <h4>Score</h4>
                        <h4>{totalScore}</h4>
                    </div>
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
