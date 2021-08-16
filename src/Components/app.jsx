import React, { Component } from 'react';
import axios from 'axios';
import MusicDisplayTable from './table/table';
import './app.css'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };

    }
    componentDidMount(){
        this.makeGetRequest();
    }
    componentDidMount (){
        axios.get("http://127.0.0.1:8000/music/")
        .then(response => this.setState({
            data : response.data
        }));
    
    }

    async makeGetRequest(){
        try{
            let response = await axios.get("http://127.0.0.1:8000/music/")
            console.log(response.data)
        }
        catch(ex){
            console.log("error in api call");
        }
    }
    
    render(){
        return(
            <div>
              <h1>{}</h1>
              <button onClick = {this.makeGetRequest}>Make Call</button>
              <MusicDisplayTable data={this.state.data}/>
            </div>
        )

    }
}
export default App;