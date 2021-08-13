import { render } from '@testing-library/react';
import { Component} from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };

    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/music/").then(function(response){
            console.log(response.data)
        })
    }

    render(){
        return(
            <h1>Testing</h1>
        )

    }
}
export default App;