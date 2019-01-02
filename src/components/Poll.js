import React from 'react';
import { connect } from 'react-redux';

class Poll extends React.Component {
    render() {
        let acUser;
        let acQuestion;
        let header;

        const { user, question } = this.props;

        if (user !== undefined) {
            acUser = (
                <div className="user-section">
                    <img className="poll-avatar" alt="avatar-img" src={user.avatarURL} />
                </div>
            );

            header = <h3 className="user-header">{user.name} asks:</h3>
        }

        if (question !== undefined) {
            acQuestion = (
                <form className="options-form">
                <h3>Would you rather...</h3>
                    <div>
                        <input style={{display: 'inline', marginLeft: 10}} type="radio" /> <p style={{display: 'inline'}}>{question.optionOne.text}</p>
                    </div>
                    <div>
                        <input style={{display: 'inline', marginLeft: 18}} type="radio" /> <p style={{display: 'inline'}}>{question.optionTwo.text}</p>
                    </div>

                    <button style={{marginTop: 30}}>Submit</button>
                </form>
            );
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

function mapStateToProps({ users, questions}, { userId, questionId }) {

    const user = users[userId];

    return {
        user: user,
        question: questions[questionId]
    }
}

export default connect(mapStateToProps)(Poll);