import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{

  constructor(){
    super()

    this.state={
      isLoggedin: false
    }
  }
  
  render(){
    let log="You are currently in";

    if(this.state.isLoggedin===false){
      log="You are curently logged out"
    }

    return(
      <div className="App">
        <h1>{log}</h1>
      </div>
    )
  }

}




export default App;
