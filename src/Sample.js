/**
 * Created by darwinmorales on 6/10/2016.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

class Sample extends Component {
    render() {
        return (
            <div>
                <SubComponent title={this.props.header1} color="blue"/>
                <SubComponent title={this.props.header2} color="yellow"/>
                <SubComponent title={this.props.header3} color="green"/>
            </div>

        );
    }

}

class SubComponent extends Component {
    render() {
        return (
            <div style={{color: this.props.color}} >
                <h1>
                    {this.props.title}
                    {/*<font color={this.props.color}>{this.props.title}</font>*/}
                </h1>
            </div>

        );
    }

}


export default Sample