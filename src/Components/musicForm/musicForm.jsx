import React, { Component } from 'react';
import './musicForm.css';
import '../app';
import axios from 'axios';

class MusicCreateForm extends Component {
    constructor(props) {
      super(props);
      this.state = { 
      title: '',
      artist: '',
      album: '',
      release_date: ''
    }
}
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
    event.preventDefault()
    alert(`
          Title: ${this.state.title} 
          Artist: ${this.state.artist} 
          Album: ${this.state.album}
          Release Date: ${this.state.release_date}` 
        )
        return axios.post("http://127.0.0.1:8000/music/")
        .then(response => this.setState({
            title:this.state.title,
            artist:this.state.artist,
            album:this.state.album,
            release_date:this.state.release_date

        }))
    }
  

  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <label for= "title" >title:</label>
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div>
            <label for= "artist">Artist:</label>
            <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
          </div>
          <div>
            <label for= "album">Album:</label>
            <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
          </div>
          <div>
              <label for= "release_date">Release Date</label>
              <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date} />  
          </div>

          <button type="submit">Submit!</button>
        </form>
      
    )
  }
}


export default MusicCreateForm
