import React, { Component } from 'react'
import { connect } from 'react-redux';

import User from './User'


class QuestionDetail extends Component {

    render() {
        const { question, auth_user, users } = this.props
        const question_id = question.id
        const user_ids = Object.keys(users)

        const user_answer = users[auth_user].answers[question_id]
        console.log('pr ', this.props, user_answer)

        let oOne = 0
        let oTwo = 0

        for (let id of user_ids) {
            if (users[id].answers[question_id]) {
                if (users[id].answers[question_id] === 'optionOne')
                    oOne++
                else oTwo++
            }
        }
        let totalVotes = oOne + oTwo

        const oOnePerc = Math.round((oOne / totalVotes) * 100, 2)
        const oTwoPerc = Math.round((oTwo / totalVotes) * 100, 2)

        return (
            <div className=''>
                <h2 className='page-heading'>Poll result</h2>
                <hr/>

                <div className='row question-home-card'>

                    <div className='col col-4'>
                        <User id={question.author} />
                    </div>
 

                    <div className='col col-8'>
                        <div className={`options ${user_answer === 'optionOne' && 'optionOne'}`}>
                            <p>
                                Would you rather {question.optionOne.text} <br/>
                            </p>
                            <div className="progress" style={{height:'50px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:`${oOnePerc}%`}} aria-valuenow={oOnePerc} aria-valuemin="0" aria-valuemax="100">{oOnePerc}%</div>
                            </div>
                            <p>{`${oOne} out of ${totalVotes} votes`}</p>
                                
                        </div>
        
                        <div className={`options ${user_answer === 'optionTwo' && 'optionTwo'}`}>
                            <p>
                                Would you rather {question.optionTwo.text} <br/>
                            </p>
                            <div className="progress" style={{height:'50px'}}>
                                <div className="progress-bar" role="progressbar" style={{width:`${oTwoPerc}%`}} aria-valuenow={oTwoPerc} aria-valuemin="0" aria-valuemax="100">{oTwoPerc}%</div>
                            </div>
                            <p>{`${oTwo} out of ${totalVotes} votes`}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, auth_user }, props) {
    const { id } = props.match.params
    const q = questions[id]

    return {
        users,
        auth_user,
        question: q ? q : null
    }
}

export default connect(mapStateToProps)(QuestionDetail)
