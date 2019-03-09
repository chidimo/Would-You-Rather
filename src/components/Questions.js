import React, { Component } from 'react'

import { connect } from 'react-redux';

import Question from './Question';

class QuestionRender extends Component {

    render() {
        const { questionIds, answered, unanswered } = this.props

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 questions-toggler'>
                        <h5>Unanswered ({unanswered.length})</h5>
                    </div>
                    <div className='col-sm-6 questions-toggler'>
                        <h5>Answered ({answered.length})</h5>
                    </div>
                </div>
                {
                    questionIds.map((id) => (
                        <Question key={id} id={id} />)
                    )
                }
            </div>
        )
    }
}


function mapStateToProps({ questions, auth_user }) {
    console.log("QuestionRender: ", questions, "***")

    let answered = []
    let unanswered = []

    let kv = Object.entries(questions)

    for (let i in kv) {
        let votes = kv[i][1].optionOne.votes.concat(kv[i][1].optionTwo.votes)
        if (votes.includes(auth_user)) answered.push(kv[i][0])
        else unanswered.push(kv[i][0])
    }

    return {
        questionIds: Object.keys(questions),
        answered,
        unanswered,
    }
}

export default connect(mapStateToProps)(QuestionRender)
