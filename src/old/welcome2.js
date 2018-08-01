import React, {Component} from 'react';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';
import {Button} from 'primereact/components/button/Button';
import Welcome from './old/welcome.js';
import './old/css.css'
class App extends Component {
  constructor(){
    super();
    this.state = {
        User: 'Anda belum memasukkan nama'
    };
  }

  klik(){
    this.setState({User: this.refs.nama.value})
   }

    render() {
        return(
            <div>
                <center>
                <div className="content-section implementation ">
                
                <TabView className="tabmenu">
                    <TabPanel header="Home">   
                    <div className="login">
                        <label>Name</label>
                        <br/>
                        <input ref="nama" type="text"/>
                        <Button className="ui-button-success" onClick={()=>{this.klik();}}>
                        Klik!
                        </Button>
                    </div>
                    </TabPanel>
                    <TabPanel header="welcome">
                        <Welcome id={this.state.User} />
                    </TabPanel>
                </TabView>
                
                </div>
                </center>
            </div>
        )
    }
}

export default App;