import React, { Component } from 'react'

import { connect } from 'react-redux';

import Author from './Author'



class Question extends Component {

    state = { selectedRadio: '' }

    toggleSelectedRadio = (option) => {
        this.setState({selectedRadio: option})
    }

    answerQuetions = (e, id) => {
        e.preventDefault()
        const { selectedRadio } = this.state
        const { question } = this.props
        const selected_text = question[selectedRadio].text


        console.log('selected: ', selectedRadio, selected_text)
    }

    render() {
        const { selectedRadio } = this.state
        const { question, auth_user } = this.props

        return (
            <div className='question-home-card card'>

                <Author id={question.author} />
 
                <form onSubmit={(e) => this.answerQuetions(e, question.id)}>
                <h4>Would You Rather</h4>
                    <div>
                        <label for={question.optionOne.text}>
                            <input
                                checked={selectedRadio === 'optionOne'}
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
                        <label for={question.optionTwo.text}>
                            <input
                                checked={selectedRadio === 'optionTwo'}
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
