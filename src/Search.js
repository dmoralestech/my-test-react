/**
 * Created by darwinmorales on 4/10/2016.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';


class Search extends Component {

    constructor() {
        super();
        this.state = {
            searchTerm: "React",
            searchTerm2: "Angular",
            userName: "1",
            userEmail: "@"
        };
    }

    //how can I refactor this?
    handleChange(event) {
        this.setState({searchTerm: event.target.value,  userName: "bbbb"});
    }

    handleChange2(event) {
        this.setState({searchTerm2: event.target.value, userName: "aaa"});
    }

    handleSubmit(event) {
        alert("Submitted values are: " +
            event.target.name.value + " " +
            event.target.email.value);
        this.setState({
            userName: event.target.name.value,
            userEmail: event.target.email.value
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <p>{this.props.searchText}</p>
                Search Term:
                <input type="search" value={this.state.searchTerm}
                       onChange={this.handleChange.bind(this)}/>

                <p>{this.state.searchTerm}</p>

                Search Term:
                <input type="search" value={this.state.searchTerm2}
                       onChange={this.handleChange2.bind(this)}/>

                <p>{this.state.searchTerm2}</p>

                <form onSubmit={this.handleSubmit}>
                    <div className="formGroup">
                        Name: <input name="name" type="text"/>
                    </div>
                    <div className="formGroup">
                        E-mail: <input name="email" type="mail"/>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <div>
                userName:
                {this.state.userName}
                </div>

                <div>
                userValue:
                {this.state.userEmail}
                </div>
            </div>
        );
    }
}

export default Search;