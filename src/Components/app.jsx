import React, { Component } from 'react';
import axios from 'axios';
import MusicDisplayTable from './table/table';
import './app.css'
import MusicCreateForm from './musicForm/musicForm';

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
    
    async addSongRequest(newSong){ 
      try{
        await axios.post("http://127.0.0.1:8000/music/", newSong)
      }
      catch(ex){
          console.log("something broke in addSongRequest")
      }
    } 




    render(){
      return(
        <div>
          <MusicDisplayTable data={this.state.data}/>
          <MusicCreateForm  addSongRequest={this.addSongRequest}/>
        </div>
      )

    }
}
export default App;