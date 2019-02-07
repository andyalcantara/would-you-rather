import React from 'react';
import { connect } from 'react-redux';

import QuestionCard from './QuestionCard';
import Signin from './Signin';

class Home extends React.Component {

    state = {
        unanswered: true,
        answered: false
    }

    handleUnanswered = () => {
        this.setState({
            unanswered: true,
            answered: false
        });
    }

    handleAnswered = () => {
        this.setState({
            unanswered: false,
            answered: true
        });
    }

    render() {

        const { unansweredQuestions, answeredQuestions, users, signedUser } = this.props;
        
        if (signedUser === null) {
            return <Signin />
        }

        return (
            <div>
                <div className="home">
                    <div className="home-header">
                        {this.state.unanswered === true
                            ? <div className="unanswered-container" onClick={this.handleUnanswered}><h4 className="header-selected">Unanswered Questions</h4></div>
                            : <div className="unanswered-container" onClick={this.handleUnanswered}><h4>Unanswered Questions</h4></div>
                        }
                        {this.state.answered === true
                            ? <div className="answered-container" onClick={this.handleAnswered}><h4 className="header-selected">Answered Questions</h4></div>
                            : <div className="answered-container" onClick={this.handleAnswered}><h4>Answered Questions</h4></div>
                        }
                        
                    </div>
                    <div className="">
                        {this.state.unanswered === true
                            ? (
                            <div>
                                <ul className="list">
                                    {
                                        unansweredQuestions.map((question, index) => {
                                            if (question.optionOne.votes.includes(signedUser) === false) {
                                                return (
                                                    <div key={question.id}>
                                                        <QuestionCard key={index} question={question} option={question.optionOne} users={users} />
                                                    </div>
                                                );
                                            } 
                                            return true;
                                        })
                                    }
                                </ul>
                            </div>
                            )
                            : (
                                <div>
                                    <ul className="list">
                                        {
                                            answeredQuestions.map((question, index) => {
                                                
                                                if (question.optionOne.votes.includes(signedUser)) {
                                                    return (
                                                        <QuestionCard key={question.id} question={question} option={question.optionOne} users={users} />
                                                    );
                                                } 
                                                return true;
                                            })
                                        }
                                    </ul>
                                    <ul className="list">
                                    {
                                        answeredQuestions.map((question, index) => {
                                            if (question.optionTwo.votes.includes(signedUser)) {
                                                return (
                                                    <QuestionCard key={index} question={question} option={question.optionTwo} users={users} />
                                                );
                                            }

                                            return true;
                                        }) 
                                    }
                                </ul>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, users, signedUser }) {

    let questionsArray = Object.keys(questions).map(key => questions[key]);
    let answersArray = [];
    let questionsSet = new Set(questionsArray);

    if (signedUser !== null) {

        answersArray = Object.keys(users[signedUser].answers).map(key => {
            return questions[key]
        });

        answersArray.map((aQuestion) => {
            return questionsSet.delete(aQuestion);
        });
    }

    let unansweredQuestions = [...questionsSet];

    if (answersArray) {
        answersArray.sort((a, b) => b.timestamp - a.timestamp);
    }

    if (unansweredQuestions) {
        unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp);
    }
    
    return {
        users: users,
        signedUser,
        answeredQuestions: answersArray,
        unansweredQuestions: unansweredQuestions,
    }
}

export default connect(mapStateToProps)(Home);