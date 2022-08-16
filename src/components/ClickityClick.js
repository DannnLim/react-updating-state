// Code ClickityClick Component Here
import React from "react";

export default class ClickityClick extends React.Component{
    constructor(){
        super();
        this.state={
            hasBeenClick: false,
            currentTheme: 'blue',
        };
    }
  handleCLick = () => {
    this.setState(previousState => {
        return {
            hasBeenClick: !previousState.hasBeenClick 
        }
    })
  }
    
    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClick ? null : 'not'} been clicked!</p>
                <button onClick={this.handleCLick}>Click me!</button>
            </div>
        );
    }
}