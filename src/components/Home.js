import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Poll from './Poll';

class Polls extends Component {

    state = { 
        display_answered: 'd-none',
        display_unanswered: '',
        un_active: 'active',
        a_active: ''
    }

    toggle_display = (which) => {
        if (which === 'Unanswered') {
            this.setState({
                display_answered: 'd-none',
                display_unanswered: '',
                a_active: '',
                un_active: 'active'
            })
        }
        else {
            this.setState({
                display_answered: '',
                display_unanswered: 'd-none',
                un_active: '',
                a_active: 'active'
            })
        }
    }

    render() {

        const { display_answered, display_unanswered, un_active, a_active } = this.state
        const { questionIds, users, auth_user } = this.props
        const answered = Object.keys(users[auth_user].answers)

        const unanswered = questionIds.filter((id) => {
            return !answered.includes(id)
        })

        return (
            <Fragment>
                <div className='row home-row center'>
                    <div className={`col-sm-6 questions-toggler ${un_active}`}>
                        <h5 onClick={() => this.toggle_display('Unanswered')}>Unanswered ({unanswered.length})</h5>
                    </div>

                    <div className={`col-sm-6 questions-toggler ${a_active}`}>
                        <h5 onClick={() => this.toggle_display('Answered')}>Answered ({answered.length})</h5>
                    </div>
                </div>

                <hr/>

                <div id='cssAnsweredQuestions' className={`${display_answered}`}>
                    {
                        answered.map((id) => (
                            <Poll key={id} id={id} answer={users[auth_user].answers[id]}/>)
                        )
                    }
                </div>

                <div id='cssUnansweredQuestions' className={`${display_unanswered}`}>
                    {
                        unanswered.map((id) => (
                            <Poll key={id} id={id} />)
                        )
                    }
                </div>
            </Fragment>
        )
    }
}


function mapStateToProps({ questions, users, auth_user }) {

    return {
        auth_user,
        users,
        questionIds: Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Polls)
