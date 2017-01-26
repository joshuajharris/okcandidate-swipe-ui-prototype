'use strict';

import React, { PropTypes, Component } from 'react';

import Header from './../ecosystems/Header';
import Survey from './../ecosystems/Survey';

class SurveyPage extends Component {

    render() {
        return (
            <div>
                <Header />
                <Survey />
            </div>
        )
    }

}

module.exports = SurveyPage;