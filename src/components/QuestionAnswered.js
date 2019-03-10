import React, { Component } from 'react'

import { connect } from 'react-redux';

import Author from './Author'

import { handle_answer_question } from '../actions/shared';



class QuestionAnswered extends Component {

    state = { selected_radio: '' }

    toggleSelectedRadio = (option) => {
        this.setState({selected_radio: option})
    }

    answerQuestion = (e) => {
        e.preventDefault()
        const { selected_radio } = this.state
        const { dispatch, question, auth_user, answer } = this.props
        dispatch(handle_answer_question({
            authedUser: auth_user,
            qid: question.id,
            answer: selected_radio
        }))
    }

    render() {
        const { selected_radio } = this.state
        const { question, answer } = this.props
        console.log('QuestionAnswered props: ', this.props)

        return (
            <div className='question-home-card card'>

                <Author id={question.author} />
 
                <form onSubmit={(e) => this.answerQuestion(e)}>
                <h5>Would You Rather</h5>
                    <div>
                        <label className=''>
                            <input
                                checked={answer === 'optionOne'}
                                onChange={() => this.toggleSelectedRadio('optionOne')}
                                id={question.optionOne.text}
                                name='optionOne'
                                type='radio' 
                                value={question.optionOne.text}
                            />
                            {question.optionOne.text}
                        </label>
                    </div>

                    <div>
                        <label className=''>
                            <input
                                checked={answer === 'optionTwo'}
                                onChange={() => this.toggleSelectedRadio('optionTwo')}
                                id={question.optionTwo.text}
                                name='optionTwo'
                                type='radio' 
                                value={question.optionTwo.text}
                            />
                            {question.optionTwo.text}
                        </label>
                    </div>

                    <button className='btn btn-sm btn-primary' type='submit'>Submit</button>
                </form>


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

export default connect(mapStateToProps)(QuestionAnswered)
