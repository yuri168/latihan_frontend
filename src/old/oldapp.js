import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import {Button} from 'primereact/components/button/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {count: 0};
    this.increment = this.increment.bind(this);
}

increment() {
    this.setState((prevState, props) => ({
        count: prevState.count + 1
    }));
}

render() {
    return (
        <div>
            <div className="content-section">
                <div className="feature-intro">
                    <h1>Button</h1>
                    <p>Button is an extension to standard input element with icons and theming.</p>
                </div>
            </div>

            <div className="content-section implementation button-demo">
                <h3 className="first">Basic</h3>
                <Button label="Click" onClick={this.increment} />
                <Button label="Click" icon="fa-check" onClick={this.increment}/>
                <Button label="Click" icon="fa-check" iconPos="right" onClick={this.increment}/>
                <Button icon="fa-check" onClick={this.increment}/>
                <Button label="Click" disabled="disabled" onClick={this.increment}/>

                <h3>Severities</h3>
                <Button label="Primary" onClick={this.increment} />
                <Button label="Secondary" onClick={this.increment} className="ui-button-secondary"/>
                <Button label="Success" onClick={this.increment} className="ui-button-success"/>
                <Button label="Info" onClick={this.increment} className="ui-button-info"/>
                <Button label="Warning" onClick={this.increment} className="ui-button-warning"/>
                <Button label="Danger" onClick={this.increment} className="ui-button-danger"/>

                <p>Number of Clicks: {this.state.count}</p>
            </div>
        </div>
    )
}
}

export default App;
