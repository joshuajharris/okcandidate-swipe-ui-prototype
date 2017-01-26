import React, { PropTypes, Component } from 'react';
import Card from 'swipe-right/dist/Card';
import Deck from 'swipe-right/dist/Deck';

const questions = require('./../../fixtures/questions');

class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.setState({
            index: 0
        });
    }

    accept() {
        console.log('accepted this answer');
    }

    reject() {
        console.log('rejected this answer');
    }

    nextPage() {
        console.log('out of questions.');
    }

    render() {
        return (
            <Deck>
                <Card>
                    <h1>Top Card</h1>
                </Card>
                <Card>
                    <h1>Second Card</h1>
                </Card>
                <Card>
                    <h1>Third Card</h1>
                </Card>
            </Deck>
        );
    }

}

export default Survey;