/**
 * Created by darwinmorales on 6/10/2016.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

class Sample extends Component {
    render() {
        return (
            <div>
                <SubComponent title="A"/>
                <SubComponent title="B"/>
                <SubComponent title="C"/>
            </div>

        );
    }

}

class SubComponent extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
            </div>

        );
    }

}


export default Sample