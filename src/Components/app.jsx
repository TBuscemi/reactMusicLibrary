import React, { Component } from 'react';
import axios from 'axios';
import MusicDisplayTable from './table/table';
import './app.css'
import MusicCreateForm from './musicForm/musicForm';
import Filter from './filter/filter';

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
    deleteSong = (songID) => {
        axios.delete("http://127.0.0.1:8000/music/"+songID+"/")
          .then(response => {
            if(response.data != null) {
              alert("Song deleted successfully.");
              this.makeGetRequest()
            }
          });
          
      };

    async makeGetRequest(){
        try{
          let response = await axios.get("http://127.0.0.1:8000/music/")
          this.setState({
            data : response.data
          });
          console.log(response.data)
        }
        catch(ex){
          console.log("error in api call");
        }
    }
    
    addSongRequest = async (newSong) => { 
      await axios.post("http://127.0.0.1:8000/music/", newSong)
      let response = await this.makeGetRequest()
        if(response === undefined){
            this.setState({

            });
        }
    }


    render(){
      return(
        <div>
          <MusicDisplayTable delete ={this.deleteSong} data={this.state.data}/>
          <MusicCreateForm  addSongRequest={this.addSongRequest}/>
        </div>
      )

    }
}
export default App;