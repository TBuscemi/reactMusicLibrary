import React, { Component } from 'react';
import './musicForm.css';
import '../app';








class MusicCreateForm extends Component {
    state = { 
      title: '',
      artist: '',
      album: '',
      release_date: null
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
          Release Date: ${this.state.release_date}
          `)

    }
  

  render() {
    return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div>
            <label>title:</label>
            <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div>
            <label>Artist:</label>
            <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
          </div>
          <div>
            <label>Album:</label>
            <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
          </div>
          <div>
              <label>Release Date</label>
              <input type="int" name="release_date" onChange={this.handleChange} value={this.state.release_date} />  
          </div>

          <button type="submit">Submit!</button>
        </form>
      
    )
  }
}


export default MusicCreateForm
