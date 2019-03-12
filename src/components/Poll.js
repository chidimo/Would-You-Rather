import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Author from './Author'


class Poll extends Component {

    render() {
        const { question } = this.props

        return (
            <div className='question-home-card card'>

                <Author id={question.author} />
 
                <h5>Would You Rather</h5>
                <p>{question.optionOne.text}...</p>
                
                <Link to={`/poll/${question.id}`} className='btn btn-primary btn-sm'>View poll</Link>
            </div>
        )
    }
}

function mapStateToProps({ questions, auth_user }, { id }) {
    const q = questions[id]

    return {
        auth_user,
        question: q ? q : null
    }
}

export default connect(mapStateToProps)(Poll)
