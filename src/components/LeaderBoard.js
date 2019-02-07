import React from 'react';
import UserCard from './UserCard';
import Signin from './Signin';

import { connect } from 'react-redux';

class LeaderBoard extends React.Component {
    render() {
        const { users, signedUser } = this.props;
        
        if (signedUser === null) {
            return <Signin />
        }

        return (
            <div style={{marginTop: 60}}>
                {
                    users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
            </div>
        );
    }
}

function mapStateToProps({ users, signedUser }) {

    let usersArray = Object.keys(users).map((key) => users[key]);
    let array = usersArray.sort((a, b) => {
        let totalAPoints = Object.keys(a.answers).length + a.questions.length;
        let totalBPoints = Object.keys(b.answers).length + b.questions.length;
        return totalBPoints - totalAPoints;
    });

    return {
        users: array,
        signedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard);