import React, { Component } from 'react';
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard'


class LeaderBoard extends Component {

    render() {

        let { users, user_ids } = this.props

        for (let id of user_ids) {
            const asked = users[id].questions.length
            const answered = Object.keys(users[id].answers).length
            const totalScore = asked + answered
            users = { 
                ...users,
                [id]: {
                    ...users[id],
                    asked: asked,
                    answered: answered,
                    totalScore: totalScore,
                }
            }
        }

        const sorted_ids = Object.keys(users).sort((a, b) => users[b].totalScore - users[a].totalScore)

        return (

            <div className=''>
                <h2 className='page-heading'>LeaderBoard</h2>
                <hr/>

                {
                    sorted_ids.map((id) => {
                        const u = users[id]
                        return(
                            <ScoreCard
                                key={u.id}
                                name={u.name}
                                asked={u.asked}
                                answered={u.answered}
                                totalScore={u.totalScore}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps({ auth_user, users }) {
    return {
        auth_user,
        users,
        user_ids: Object.keys(users)
    }
}

export default connect(mapStateToProps)(LeaderBoard);
