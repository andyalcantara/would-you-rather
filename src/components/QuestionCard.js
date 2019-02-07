import React from 'react';
import { Link } from 'react-router-dom';

const QuestionCard = (props) => {
    return (
        <li className="list-poll">
            <div className="header-poll-container">
                <h3>{props.question.author} asks:</h3>
            </div>
            
            <div className="info-poll-container">
                <img style={{borderRadius: '100%'}} className="avatar" alt="useravatar" src={props.users[props.question.author].avatarURL}/>
                <div className="question-poll-container">
                    <h3>Would you rather</h3>
                    <p>{props.option.text}</p>
                    <Link to={`/questions/${props.question.id}`} className="question-poll-button" style={{marginBottom: 20, textDecoration: 'none'}}>View Poll</Link>
                </div>
            </div>
        </li>
    );
}

export default QuestionCard;