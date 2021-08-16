import React from 'react';
import './table.css';
import '../app';



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
              <button>Delete</button>
          </tr>))}
        </tbody>
      </table>
    );
}
export default MusicDisplayTable;

