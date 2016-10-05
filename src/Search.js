/**
 * Created by darwinmorales on 4/10/2016.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';


class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "React"
        };
    }

    handleChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <div>
                <p>{this.props.searchText}</p>
                Search Term:
                <input type="search" value={this.state.searchTerm}
                       onChange={this.handleChange.bind(this)}/>

                <p>{this.state.searchTerm}</p>
            </div>
        );
    }
}

export default Search;