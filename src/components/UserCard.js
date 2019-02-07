import React from 'react';

const UserCard = (props) => {
    return (
        <div className="card">
            <div className="card-avatar">
                <img src={props.user.avatarURL} alt="avatar-url" style={{borderRadius: '100%', height: 120, marginTop: 60}}/>
            </div>

            <div className="card-stats">
                <h2>{props.user.name}</h2>
                <h5>Answered questions: {Object.keys(props.user.answers).length}</h5>
                <h5>Created questions: {props.user.questions.length}</h5>
            </div>

            <div className="card-score">
                <div className="score-container">
                    <div className="score-header">
                        <h3>Score</h3>
                    </div>
                    <div className="score">
                        <p style={{marginTop: 10}}>{Object.keys(props.user.answers).length + props.user.questions.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;