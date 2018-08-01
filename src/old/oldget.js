import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {

    constructor(){
        super();
        this.state ={
            // dataApi:[]
            datajson:[]
        }
    }

    componentDidMount(){
        var url = 'https://facebook.github.io/react-native/movies.json'
        axios.get(url)
        .then((coba)=>{
            console.log(coba.data);
            this.setState({
                dataApi1: coba.data.movies[0].title,
                dataApi2: coba.data.movies[1].title,
                dataApi3: coba.data.movies[2].title,
                dataApi4: coba.data.movies[3].title,
                dataApi5: coba.data.movies[4].title

            // datajson: coba.data
            })

        })
        
    }

        render() {
            var gaya = {
                border: '1px solid black',borderCollapse:'collapse', padding: '12px' 
            }

            // const data = this.state.datajson.map(
            //     function (val,i){
            //         var userid = val.userId;
            //         var id = val.id;
            //         var title = val.title;
            //         var body = val.body;
            //         return (
            //         <tr key={i} style={gaya}>
            //             <td style={gaya}> {userid}</td>
            //             <td style={gaya}> {id}</td>
            //             <td style={gaya}> {title}</td>
            //             <td style={gaya}> {body}</td>
            //         </tr>
            //         )
            //     })

            return (

                <div>
                    <h1>TES GET API</h1>

                    {/* <h2>{this.state.dataApi1}</h2>
                    <h2>{this.state.dataApi2}</h2>
                    <h2>{this.state.dataApi3}</h2>
                    <h2>{this.state.dataApi4}</h2>
                    <h2>{this.state.dataApi5}</h2> */}

                    {/* <table style={gaya}>
                    <tbody>
                        {data}
                    </tbody>
                    </table> */}
                </div>
            )
    }
}
export default App;
