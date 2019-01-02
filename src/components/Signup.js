import React, { Component } from 'react';

class Signup extends Component {

    state = {
        username: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.username);
    }

    handleOnChange = (e) => {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }

    render() {
        return (
            <div>
                <h3>Sign up</h3>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Username" onChange={this.handleOnChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Signup;