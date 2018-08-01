
import React, {Component} from 'react';
import Axios from 'axios';

class App extends Component {
    constructor(){
        super();
        this.state ={
            datazomato:[],
            userinput:'',
        }
    }

    klik(){
        this.setState({userinput: this.refs.nama.value})
    }

  klikzomato(){
      var url = 'https://developers.zomato.com/api/v2.1/search?q=' + this.state.userinput;
      var config = {headers: {'user-key':'7d264fd54d122817d831810aa94716a0'}} //header untuk user key <zomato
      Axios.get(url, config)
      .then((x)=> {
              console.log(x.data.restaurants);
              this.setState({
                
                datazomato: x.data.restaurants

                })
          }
      )
  }

    render() {

        const data = this.state.datazomato.map(
            function (val,i){
                var namaresto = val.restaurant.name;
                var alamat = val.restaurant.location.address;
                var gambar = val.restaurant.thumb;

                return(
                    
                    <li key={i}>
                    <h3>{namaresto}</h3>
                    <p>{alamat}</p>
                    <img alt={i} src={gambar}/>
                    </li>
                    
                )
            }
        )

        return(
            <center>
            <div>
                <h1> Get Zomato </h1>
                    <p>{this.state.userinput}</p>
                    <input ref="nama" type="text" onInput={()=>{this.klik();}}/>
                    <button onClick={()=>{this.klikzomato();}}>
                        Get data
                    </button>
                    <div className="content-section implementation">
                        {data}
                    </div>
            </div>
            </center>
        )
    }
}

export default App;