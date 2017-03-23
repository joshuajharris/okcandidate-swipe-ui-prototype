import React, { PropTypes, Component } from 'react';
import Card from 'swipe-right/dist/Card';
import Deck from 'swipe-right/dist/Deck';

const questions = require('./../../fixtures/questions');

class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {
          cards: [
            {
              id: 0,
              title: 'Card 1',
              text: 'This is the first card.'
            },
            {
              id: 1,
              title: 'Card 2',
              text: 'This is the second card.'
            },
            {
              id: 2,
              title: 'Card 3',
              text: 'This is the third card.'
            }
          ]
        }
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
        const cards = this.state.cards;

        return (
            <Deck cards={cards}
              accept={this.accept}
              reject={this.reject}>
            </Deck>
        );
    }

}

export default Survey;
