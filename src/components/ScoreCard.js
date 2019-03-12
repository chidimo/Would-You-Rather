import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux';


class ScoreCard extends Component {

    render() {

        const { name, asked, answered, totalScore } = this.props

        return (
            <div className='score-card'>
                <h5 className='page-header'>Score card for {name}</h5>
                <hr/>
    
                <div className='row'>
                    <div className='col col-sm-3'>
                        <img src={`https://robohash.org/${name}.png`} alt={`Avatar of ${name}`} className="avatar"/>
                    </div>
    
                    <div className='col col-sm-7'>
                        <h6>Created questions: <span className='float-right'>{asked}</span></h6>
                        <hr/>
                        <h6>Answered questions: <span className='float-right'>{answered}</span></h6>
                    </div>
    
                    <div className='col col-sm-2'>
                        <h4>Score {totalScore}</h4>
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

export default connect(mapStateToProps)(ScoreCard)
