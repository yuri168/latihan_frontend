import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {

    constructor(){
        super();
        this.state ={
            dataApi:[],
            userinput:'',
        }
    }
    klik(){
        this.setState({userinput: this.refs.nama.value})
       }
    
    search(){
        var url = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+ this.state.userinput
        axios.get(url)
        .then((coba)=>{
            console.log(coba.data);
            this.setState({
                
                dataApi: coba.data

                })
            })
        }
        render() {
            
            const data = this.state.dataApi.map(
                function (val,i){
                    var name = val.strPlayer;
                    var posisi =val.strPosition;
                    var thumb =val.strThumb;
                    var desc =val.strDescriptionEN;
                
                    return(
                        console.log(name, posisi, thumb, desc)
                    )
                }
            )

            return (

                <div>
                    <h1>Daftar Pemain {this.state.userinput}</h1>
                    <input ref = "nama" type="text" 
                    onInput={()=>{this.klik();}}/>
                    <button onClick={()=>{this.search();}}>
                    klik!
                    </button>
                    <div>
                        
                    </div>
                </div>
            )
    }
}
export default App;
