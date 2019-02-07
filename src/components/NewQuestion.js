import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';
import Signin from './Signin';

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        newQuestion: false
    }

    handleOptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        });
    }

    handleOptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { signedUser, dispatch } = this.props;
        const { optionOne, optionTwo } = this.state;

        if (optionOne === '' || optionTwo === '') {
            alert('Please no empty fields or equal options');
            this.setState(() => ({
                optionOne: '',
                optionTwo: '',
                newQuestion: false
            }));
        } else {

            dispatch(handleAddQuestion(optionOne, optionTwo, signedUser));
            this.setState(() => ({
                optionOne: '',
                optionTwo: '',
                newQuestion: true
            }));
        }
    }

    render() {

        const { signedUser } = this.props;

        if (signedUser === null) {
            return <Signin />
        }

        if (this.state.newQuestion) {
            return <Redirect to="/" />
        }
        
        return (
            <div className="question-container">
                <div className="question-header-container">
                    <h1>Create New Question</h1>
                </div>
                <div>
                    <h5 style={{marginTop: 10, width: 200}}>Complete the question: </h5>
                    <h3 style={{marginTop: 20, marginBottom: 10, width: 200}}>Would you rather...</h3>
                    <form className="question-form" onSubmit={this.handleSubmit}>
                        <input type="text" className="question-input" placeholder="Enter Option One Text Here" value={this.state.optionOne} onChange={this.handleOptionOne}/>
                            <h4 style={{margin: 0, marginTop: 7}}>OR</h4>
                        <input type="text" className="question-input" placeholder="Enter Option Two Text Here" value={this.state.optionTwo} onChange={this.handleOptionTwo}/>
                        <button className="question-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ signedUser }) {
    return {
        signedUser: signedUser
    }
}

export default connect(mapStateToProps)(NewQuestion);
