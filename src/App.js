import React, {Component} from 'react';
import "./App.css";
import Button from './components/button';
import Date from './components/date';
import ErrorBoundary from './components/errorBoundaries'

class App extends Component{
    render(){
        return(
            <div className="App">
                <ErrorBoundary>
                    <h1>Test</h1>
                    <Button/>
                    <Date />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;