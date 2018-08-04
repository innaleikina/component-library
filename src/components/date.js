import React, {Component} from 'react';
var moment = require('moment');
//Moment is not working at the moment :P
//Moment prototype is exposed through moment.fn ==>how you add your own functions
//moment() => date and time
//moment.("...").isValid ==> check validity of string format (false means no go)
//automatically creates date/time in current time zone

var date = new Date().now

class DateTime extends Component{
    constructor(props){
        super(props)
        this.state = {
            big: "",
            medium: "",
            small: ""
        }
    }
    render(){
        return(
            <div>
                <p>{date}</p>
            </div>
        )
    }
}

export default DateTime;