import React, { Component } from 'react';

class NewQuestion extends Component {
    render() {
        return (
            <div className="question-container">
                <div className="question-header-container">
                    <h1 className="">Create New Question</h1>
                </div>
                <div>
                    <h5 style={{marginTop: 10, width: 200}}>Complete the question: </h5>
                    <h3 style={{marginTop: 20, marginBottom: 10, width: 200}}>Would you rather...</h3>
                    <form className="question-form">
                        <input type="text" className="question-input" placeholder="Enter Option One Text Here"/>
                            <h4 style={{margin: 0, marginTop: 7}}>OR</h4>
                        <input type="text" className="question-input" placeholder="Enter Option Two Text Here"/>
                        <button className="question-button">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewQuestion;
