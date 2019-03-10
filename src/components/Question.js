import React, { Component } from 'react'

import { connect } from 'react-redux';

import Author from './Author'

import { handle_answer_question } from '../actions/shared';



class Question extends Component {

    state = { selected_radio: '' }

    toggleSelectedRadio = (option) => {
        this.setState({selected_radio: option})
    }

    answerQuestion = (e) => {
        e.preventDefault()
        const { selected_radio } = this.state
        const { dispatch, question, auth_user } = this.props

        const data = {
            authedUser: auth_user,
            qid: question.id,
            answer: selected_radio
        }
        dispatch(handle_answer_question(data))
    }

    render() {
        const { selected_radio } = this.state
        const { question } = this.props

        return (
            <div className='question-home-card card'>

                <Author id={question.author} />
 
                <form onSubmit={(e) => this.answerQuestion(e)}>
                <h4>Would You Rather</h4>
                    <div>
                        <label>
                            <input
                                checked={selected_radio === 'optionOne'}
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
                        <label>
                            <input
                                checked={selected_radio === 'optionTwo'}
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

export default connect(mapStateToProps)(Question)
