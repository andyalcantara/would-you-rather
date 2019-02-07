import React, { Component } from 'react';
import { handleUserSignUp } from '../actions/users';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Signup extends Component {

    state = {
        username: '',
        name: '',
        avatarURL: '',
        signupCompleted: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;

        dispatch(handleUserSignUp({
            id: this.state.username, 
            name: this.state.name, 
            avatarURL: this.state.avatarURL,
            answers: {},
            questions: []
        }));

        this.setState({
            username: '',
            name: '',
            avatarURL: '',
            signupCompleted: true
        });

        alert("You have succesfully Signed up, please login!");

    }

    handleOnChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
        console.log(this.state.username);
    }

    handleAvatarUrl = (e) => {
        this.setState({
            avatarURL: e.target.value
        });
        console.log(this.state.username);
    }

    render() {
        if (this.state.signupCompleted) {
            return <Redirect to="/signin" />
        }

        return (
            <div>
                <h3>Sign up</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleOnChange} />
                    <input type="text" placeholder="Whole Name" value={this.state.name} onChange={this.handleName} />
                    <input type="text" placeholder="Avatar Url" value={this.state.avatarURL} onChange={this.handleAvatarUrl} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(Signup);