import React from 'react';
import './table.css';
import '../app';



const MusicDisplayTable = (props) => {
    return ( 
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>artist</th>
            <th>album</th>
            <th>release date</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(data => (
            <tr>
              <td>{data.title}</td>
              <td>{data.artist}</td>
              <td>{data.album}</td>
              <td>{data.release_date}</td>
          </tr>))}
        </tbody>
      </table>
    );
}
export default MusicDisplayTable;

