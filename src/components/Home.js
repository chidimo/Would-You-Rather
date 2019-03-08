import React, { Component } from 'react'

import { connect } from 'react-redux';

class Home extends Component {
    render() {
        const { questionIds } = this.props

        return (
            <div className='main'>

                {questionIds.map((id) => (
                    <p key={id}>Question: {id}</p>
                ))}
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questionIds : Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Home)
