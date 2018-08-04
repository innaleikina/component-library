import React, {Component} from 'react';

class Button extends Component{
    //constructor for state
    constructor(props){
        super(props);
        this.state = {isOff: true}
        //bind this
        this.handleClick = this.handleClick.bind(this)
    }

    //event handler
    handleClick() {
        this.setState(prevState => ({
          isOff: !prevState.isOff
        }));
      }
    //render and return
    render(){
        return(
            <div>
            <button onClick={this.handleClick}>
                {this.state.isOff ? 'OFF' : 'ON'}
            </button>
            </div>
        )
    }
}
//export
export default Button