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
                    <input
                        type='text'
                        placeholder='Enter second option'
                        name='optionTwo'
                        className='form-control'
                    />

                    <button type='submit' className='btn btn-sm btn-success'>Submit</button>
                </form>
            </div>
        );
    }
}


function mapStateToProps({ }) {

    return {}
}

export default withRouter(connect(mapStateToProps)(NewPoll));
