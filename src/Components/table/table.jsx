import React from 'react';
import './table.css';
import '../app';
import axios from 'axios';

const deleteSong = (songID) => {
  axios.delete("http://127.0.0.1:8000/music/"+songID+"/")
    .then(response => {
      if(response.data != null) {
        alert("Song deleted successfully.");
      }
    });
};

const MusicDisplayTable = (props) => {
    return ( 
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(data => (
            <tr>
              <td>{data.title}</td>
              <td>{data.artist}</td>
              <td>{data.album}</td>
              <td>{data.release_date}</td>
              <button onClick={() => deleteSong(data.id)}>Delete</button>
          </tr>))}
        </tbody>
      </table>
    );
}
export default MusicDisplayTable;

