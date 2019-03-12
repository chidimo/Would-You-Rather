import React, { Component } from 'react'

import { connect } from 'react-redux';

import User from './User'


class QuestionDetail extends Component {

    render() {
        const { question, answer } = this.props

        return (
            <div className='question-home-card card'>
                poll result

                {/* <h2>Results for poll</h2>

                <User id={question.author} />
 
                <h5>Would You Rather</h5>
                <h4>{question.optionOne.text}</h4>

                <h4>{question.optionTwo.text}</h4> */}
            </div>
        )
    }
}

function mapStateToProps({ questions, auth_user }, props) {
    console.log('ppppppp: ', props)
    const { id } = props.match.params

    console.log('ID: ', id, "\n", questions)
    const q = questions[id]

    return {
        auth_user,
        question: q ? q : null
    }
}

export default connect(mapStateToProps)(QuestionDetail)
