import React, { Component } from 'react'

import { connect } from 'react-redux';

import Question from './Question';

class QuestionRender extends Component {

    render() {
        const { questionIds } = this.props
        const answered_questions = questionIds
        const unanswered_questions = questionIds

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 center'>
                        <h5>Unanswered</h5>
                    </div>
                    <div className='col-sm-6 center'>
                        <h5>Answered</h5>
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


function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions),
    }
}

export default connect(mapStateToProps)(QuestionRender)
