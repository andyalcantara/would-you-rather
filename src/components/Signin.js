import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleSignUser } from '../actions/signedUser';
import { Redirect } from 'react-router-dom';

class Signin extends Component {

    state = {
        userId: null,
        isLoggedIn: false
    }

    handleChange = (e) => {
        let userId = e.target.value;

        this.setState({
            userId: userId
        });
    }

    handleSignIn = (e) => {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(handleSignUser(this.state.userId));
        this.setState({
            isLoggedIn: true
        })
    }
    
    render() {

        if (this.state.isLoggedIn) {
            return <Redirect to="/" />
        }

        return (
            <div className="signin-card">
                <div className="sign-header-section">
                    <h3 className="header-title">Welcome to the Would you Rather app</h3>
                </div>

                <h3 style={{marginTop: 200}}>Sign In</h3>
                <select className="select-user" onChange={this.handleChange}>
                <option value="">--Please select an user--</option>
                    {
                        this.props.users.map(user => (
                            <option key={user.id} value={user.id}> 
                                {user.name}
                            </option>
                        ))
                    }
                </select>

                <button className="question-button" onClick={this.handleSignIn}>Sign In</button>
            </div>
        );
    }
}

function mapStateToProps({ users }) {

    return {
        users: Object.keys(users).map(key => users[key])
    }
}

export default connect(mapStateToProps)(Signin);