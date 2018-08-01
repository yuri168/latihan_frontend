import React, {Component} from 'react';
import Axios from 'axios';

class App extends Component {
    constructor(){
        super();
        this.state ={
            pegawai: []
        }
    }

    klikget(){
        var url = 'http://localhost:3000/pegawai/';
        Axios.get(url).then(
            (x)=>{
                console.log(x.data);
                this.setState({
                    pegawai: x.data
                })
            }
        )
    }

    klikpost(){
        var url = 'http://localhost:3000/pegawai/';
        Axios.post(url, {
            id: this.refs.id.value,
            nama: this.refs.nama.value
        }).then ((respon)=>{console.log(respon)})
            .catch((gagal)=>{console.log(gagal)})
    }

    klikdelet(){
        var id = this.refs.id.value
        var url = 'http://localhost:3000/pegawai/'+id;
        Axios.delete(url)
            .then ((respon)=>{console.log(respon)})
            .catch((gagal)=>{console.log(gagal)})
    }

    klikupdate(){
        var id = this.refs.id.value
        var url = 'http://localhost:3000/pegawai/'+id;
        Axios.patch(url,{
            nama: this.refs.nama.value,
        }).then ((respon)=>{console.log(respon)})
            .catch((gagal)=>{console.log(gagal)})
    }

    render() {

        var datapegawai = this.state.pegawai.map(
            (val,i)=>{
                var id = val.id;
                var nama = val.nama;
                return(
                    <li key={i}>{id} - {nama}</li>
                )
            }
        )


        return(
            <div>
                <h1>Main Fake API </h1>
                <input ref="id" type="number" className="form-control" placeholder="ketik ID"/>
                <input ref="nama" type="text" className="form-control" placeholder="ketik Nama"/>
                
                <button className="btn btn-success" onClick={()=>{this.klikget();}}> Get Pegawai </button>
                <button className="btn btn-danger" onClick={()=>{this.klikpost();}}> POST Pegawai </button>
                <button className="btn btn-primary" onClick={()=>{this.klikdelet();}}> DELETE Pegawai </button>
                <button className="btn btn-primary" onClick={()=>{this.klikupdate();}}> UPDATE Pegawai </button>

                <ul>
                    
                {datapegawai}
                </ul>
            </div>
        )
    }
}

export default App;