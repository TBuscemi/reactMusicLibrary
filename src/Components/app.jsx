import { render } from '@testing-library/react';
import { Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <h1> testing</h1>
        )

    }
}
export default App;