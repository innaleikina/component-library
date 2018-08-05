import React, {Component} from 'react';
import "./App.css";
import Button from './components/button';
import Date from './components/date';
import ErrorBoundary from './components/errorBoundaries'
import DateTime from './components/date';

class App extends Component{
    render(){
        return(
            <div className="App">
                <ErrorBoundary>
                    <h1>Test</h1>
                    <Button/>
                    {/* this is not working...props are not passing*/}
                    <DateTime style = 'lg' />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;