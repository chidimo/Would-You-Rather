import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handle_answer_question } from '../actions/shared';

import User from './User'

class QuestionAnswerPage extends Component {

    state = { selected_radio: '', toHome: false, redirect_id: '' }

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
        this.setState({toHome: true, redirect_id: question.id})
    }

    render() {
        const { selected_radio, toHome, redirect_id } = this.state
        const { question } = this.props

        if (toHome === true) return <Redirect push={true} to={`/question/details/${redirect_id}`} />

        return (
            <div className='question-home-card card'>

                <User id={question.author} />
 
                <form onSubmit={(e) => this.answerQuestion(e)}>
                <h5>Would You Rather</h5>
                    <div>
                        <label className=''>
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
                        <label className=''>
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

function mapStateToProps({ questions, auth_user }, props ) {
    const { id } = props.match.params
    const q = questions[id]

    return {
        auth_user,
        question: q ? q : null
    }
}

export default connect(mapStateToProps)(QuestionAnswerPage)