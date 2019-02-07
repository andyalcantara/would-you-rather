import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSignOut } from '../actions/signedUser';

class Nav extends React.Component {

    handleSignout = () => {
        const { dispatch } = this.props;

        dispatch(handleSignOut());
    }

    render() {
        let greeting = '';
        let image;
        const { user } = this.props;

        if (user) {
            greeting = 'Hello, ' + user.name;
            image = <img style={{borderRadius: '100%', height: 30, width: 30, marginLeft: 15}} alt="small-avatar" src={user.avatarURL} />
        } else {
            greeting = '';
            image = '';
        }

        return (
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/" exact style={{textDecoration: 'none', width: '100%', color: 'lightseagreen'}}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add" exact style={{textDecoration: 'none', width: '100%', color: 'lightseagreen'}}>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" exact style={{textDecoration: 'none', width: '100%', color: 'lightseagreen'}}>
                            Leader Board
                        </NavLink>
                    </li>
                </ul>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <p>{greeting}</p>
                    {image}
                </div>
                {user ? <button className="signout-button" onClick={this.handleSignout}>Sign Out</button> : (
                    <NavLink to="/signup" exact style={{textDecoration: 'none', color: 'lightseagreen'}}>
                            Sign Up
                    </NavLink>
                )}
                
            </nav>
        );
    }
}

function mapStateToProps({ signedUser, users }) {

    let user = users[signedUser];

    return {
        user: user ? user : ''
    }
}

export default connect(mapStateToProps)(Nav);