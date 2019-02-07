import React from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/users';
import Signin from './Signin';
import NoMatch from './NoMatch';

class Poll extends React.Component {

    state = {
        option: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, question } = this.props;

        if (this.state.option === '') {
            alert('You must select an option');
        } else {
            dispatch(handleAnswerQuestion(question.id, this.state.option));
        }
    }

    handleChange = (e) => {
        this.setState({
            option: e.target.value
        });
    }

    render() {
        let acUser;
        let acQuestion;
        let header;

        const { user, signedUser, question, userAnswers, userAnswer, users, otherAnswer } = this.props;

        if (signedUser === null) {
            return <Signin />
        } 

        if (user !== undefined) {

            acUser = (
                <div className="user-section">
                    <img className="poll-avatar" alt="avatar-img" src={user.avatarURL} />
                </div>
            );

            header = <h3 className="user-header">{user.name} asks:</h3>
        }

        if (question !== undefined) {
            let numberOfUsers = users.length;
            if (userAnswers.includes(question.id)) {
                acQuestion = (
                    <div className="ans-container">
                        <h2>Results:</h2>
                        <div className="answer-selected">
                            <h5>Would you rather {question[userAnswer].text}</h5>
                            <h5>{question[userAnswer].votes.length} voted for this answer</h5>
                            <h5>{Math.floor((question[userAnswer].votes.length / numberOfUsers) * 100)} %</h5>
                        </div>
                        <div className="answer-not-selected">
                            <h5>Would you rather {otherAnswer.text}</h5>
                            <h5>{otherAnswer.votes.length} voted for this answer</h5>
                            <h5>{Math.floor((otherAnswer.votes.length / numberOfUsers) * 100)} %</h5>
                        </div>
                    </div>
                );
            } else {
            acQuestion = (
                <form className="options-form" onSubmit={this.handleSubmit}>
                <h3>Would you rather...</h3>
                    <div>
                        <input 
                            style={{display: 'inline', marginLeft: 10}} 
                            type="radio" 
                            name="option" 
                            value="optionOne"
                            onChange={this.handleChange}
                        /> <p style={{display: 'inline'}}>{question.optionOne.text}</p>
                    </div>
                    <div>
                        <input 
                            style={{display: 'inline', marginLeft: 18}} 
                            type="radio" name="option" 
                            value="optionTwo" 
                            onChange={this.handleChange}
                        /> <p style={{display: 'inline'}}>{question.optionTwo.text}</p>
                    </div>

                    <button className="poll-button" style={{marginTop: 30}}>Submit</button>
                </form>
            )};
        } else {
            return <NoMatch />
        }
        return (
            <div className="poll-container">
                <div className="user-header-container">
                    {header}
                </div>
                <div className="poll">
                    <div>
                        {acUser}
                    </div>
                    
                    <div className="poll-form">
                        {acQuestion}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users, questions, signedUser }, { match }) {
    let userAnswer = {};
    let userAnswers = [];
    let otherOption = {};

    const { question_id } = match.params;
    console.log(match);

    let userId = '';

    if (questions[question_id]) {
        userId = questions[question_id].author;
    } 

    const user = users[userId];

    if (users[signedUser]) {

        userAnswer = users[signedUser].answers[question_id];
        userAnswers = Object.keys(users[signedUser].answers);

        if (questions[question_id]) {
            if (questions[question_id].optionOne.votes.includes(signedUser)) {

                otherOption = questions[question_id].optionTwo;
    
            } else if (questions[question_id].optionTwo.votes.includes(signedUser)) {
    
                otherOption = questions[question_id].optionOne;
    
            }
        } 
    }

    const usersArray = Object.keys(users).map((key) => users[key]);

    return {
        signedUser,
        question_id,
        user: user,
        users: usersArray,
        otherAnswer: otherOption,
        userAnswer: userAnswer,
        userAnswers: userAnswers,
        question: questions[question_id],
    }
}

export default connect(mapStateToProps)(Poll);