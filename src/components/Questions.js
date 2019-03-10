import React, { Component } from 'react'

import { connect } from 'react-redux';

import QuestionUnanswered from './QuestionUnanswered';
import QuestionAnswered from './QuestionAnswered'

class QuestionRender extends Component {

    state = { display_answered: 'd-none', display_unanswered: ''}

    toggle_display = (which) => {
        if (which === 'Unanswered') {
            this.setState({
                display_answered: 'd-none',
                display_unanswered: ''
            })
        }
        else {
            this.setState({
                display_answered: '',
                display_unanswered: 'd-none'
            })
        }
    }

    render() {

        const { display_answered, display_unanswered } = this.state
        const { questionIds, users, auth_user } = this.props

        const answered = Object.keys(users[auth_user].answers)
        const unanswered = questionIds.filter((id) => {
            return !answered.includes(id)
        })

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 questions-toggler'>
                        <h5 onClick={() => this.toggle_display('Unanswered')}>Unanswered ({unanswered.length})</h5>
                    </div>
                    <div className='col-sm-6 questions-toggler'>
                        <h5 onClick={() => this.toggle_display('Answered')}>Answered ({answered.length})</h5>
                    </div>
                </div>

                <hr/>

                <div id='cssAnsweredQuestions' className={display_answered}>
                    <h5>Answered questions</h5>
                    {
                        answered.map((id) => (
                            <QuestionAnswered key={id} id={id} answer={users[auth_user].answers[id]}/>)
                        )
                    }
                </div>

                <div id='cssUnansweredQuestions' className={display_unanswered}>
                    <h5>Unanswered questions</h5>
                    {
                        unanswered.map((id) => (
                            <QuestionUnanswered key={id} id={id} />)
                        )
                    }
                </div>
            </div>
        )
    }
}


function mapStateToProps({ questions, users, auth_user }) {

    return {
        auth_user,
        users,
        questionIds: Object.keys(questions),
    }
}

export default connect(mapStateToProps)(QuestionRender)
