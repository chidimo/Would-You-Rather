import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handle_add_poll } from '../actions/questions'


class NewPoll extends Component {

    createQuestion = (e) => {
        e.preventDefault()
        const t = e.target
        const optionOneText = t.optionOne.value
        const optionTwoText = t.optionTwo.value
        const { dispatch } = this.props
        dispatch(handle_add_poll(optionOneText, optionTwoText))
        this.props.history.push('/')
        
    }

    render() {
        return (

            <div className='container center'>
                <h2 className='page-heading'>Create new poll</h2>
                <hr/>
                <h5>Would you rather...</h5>
                <form onSubmit={(e) => this.createQuestion(e)}>
                    <input
                        type='text'
                        placeholder='Enter first option'
                        name='optionOne'
                        className='form-control'
                    />
                    <h3 className='text-center'>OR</h3>
                    <input
                        type='text'
                        placeholder='Enter second option'
                        name='optionTwo'
                        className='form-control'
                    />

                    <hr/>

                    <button type='submit' className='btn btn-sm btn-primary'>Submit</button>
                </form>
            </div>
        );
    }
}


function mapStateToProps({ auth_user }) {

    return {
        auth_user
    }
}

export default withRouter(connect(mapStateToProps)(NewPoll));
