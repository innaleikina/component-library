import React, {Component} from 'react';
import moment from 'moment';
//Moment is not working at the moment :P
//Moment prototype is exposed through moment.fn ==>how you add your own functions
//moment() => date and time
//moment.("...").isValid ==> check validity of string format (false means no go)
//automatically creates date/time in current time zone

var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
class DateTime extends Component{
    constructor(props){
        super(props)
        this.state = {
            fontSize: {}
            //lg: {fontSize: '70px'},
            //med: {fontSize: '30px'},
            //sm: {fontSize: '10px'}
        }
    }
    style(size){
        size = this.props.style;
        if(size === 'lg'){
            this.setState({
                fontSize: {fontSize: '70px'}
            })
        }else if(size === 'med') {
            this.setState({
                fontSize: {fontSize: '30px'}
            })
        }else{
            this.setState({
                fontSize: {fontSize: '10px'}
            })
        }
    }
    render(){
        return(
            <div>
                <p style={this.state.fontSize}>{now}</p>
            </div>
        )
    }
}

export default DateTime;