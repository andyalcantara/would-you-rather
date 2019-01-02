import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {

    handleUnanswered = () => {

    }

    handleAnswered = () => {

    }

    render() {

        const { questions, users } = this.props;

        console.log(this.props.questions);
        return (
            <div className="home">
                <div className="home-header">
                    <h4 style={{marginLeft: 30, height: 40, marginTop: 40}} onClick={this.handleUnanswered}>Unanswered Questions</h4>
                    <h4 style={{marginLeft: 100, height: 40, marginTop: 40}} onClick={this.handleAnswered}>Answered Questions</h4>
                </div>
                <div className="">
                    <ul className="list">
                        {
                            questions.map((question) => (
                                <li key={question.id} className="list-poll">
                                    <h3>{question.author} asks:</h3>
                                    <img className="avatar" alt="useravatar" src={users[question.author].avatarURL}/>
                                    <div>
                                        <h3>Would you rather</h3>
                                        <p>{question.optionOne.text}</p>
                                    </div>
                                    <button style={{marginBottom: 20}}>View Poll</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions, users }) {
    
    return {
        questions: Object.keys(questions).map((key) => questions[key]),
        users: users
    }
}

export default connect(mapStateToProps)(Home);