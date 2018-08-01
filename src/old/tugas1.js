import React, { Component } from 'react';
import axios from 'axios';
import './css/gbr.css'
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
                
                dataApi: coba.data.player

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
                        <div key={i} className="panel panel-primary" >
                        <div className="panel-heading">
                        <h3 className="panel-title left">{name +' '+(posisi)}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className=" col-sm-12 col-md-4 "><img className="gambar" alt={i} src={thumb}/></div>
                                <div className=" col-sm-12 col-md-8 ">{desc}</div>
                            </div>
                        </div>
                        </div>
                       
                    )
                }
            )

            return (
                
                <div  className="back-gambar">
                    <center>
                    
                    <p className="pad">Daftar Pemain {this.state.userinput}</p>
                    <div className="input-group padding">
                    <input ref="nama" type="text" className="form-control" onInput={()=>{this.klik();}}/>
                    <span className="input-group-btn"><button className="btn btn-default" onClick={()=>{this.search();}}>
                    klik!</button></span>
                    </div>
                    <br/>
                    <div>
                        {data}
                    </div>
                    
                    </center> 
                </div>
                
            )
    }
}
export default App;
