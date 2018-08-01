import React, { Component } from 'react';

class Welcome extends Component {
state = {
    id: this.props.id
};

render() {
    return (
        <div>
            <h1> {this.state.id} </h1>
        </div>
    )
}
} 
export default Welcome;