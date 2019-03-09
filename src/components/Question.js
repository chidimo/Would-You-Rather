import React, { Component } from 'react'

import { connect } from 'react-redux';

import Author from './Author'


class Question extends Component {

    answerQuetions = (e, id) => {
        e.preventDefault()
        const t = e.target
        const oOne = t.optionOne.checked
        const oTwo = t.optionTwo.checked
        console.log("Anser question: ", oOne, oTwo, id)
    }

    render() {
        const { question, auth_user } = this.props
        console.log('question props: ', this.props)

        return (
            <div className='question-home-card card'>

                <Author id={question.author} />
 
                <h4>Would You Rather</h4>
                <form onSubmit={(e) => this.answerQuetions(e, question.id)}>
                    <p>
                        <input name='optionOne' type='radio' />
                        {question.optionOne.text}
                    </p>
                    <p>
                        <input name='optionTwo' type='radio' />
                        {question.optionTwo.text}
                    </p>

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
