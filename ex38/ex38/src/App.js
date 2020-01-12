import React from "react"
import Button from "./button"
import Conditional from "./Conditonal"

class App extends React.Component{

  constructor(){
    super()
    this.state={
      isLogged:true
    }
    this.handleClick=this.handleClick.bind(this)
  }
 handleClick(){
   this.setState(prevState => {
     return{isLogged:!prevState.isLogged}
    })
 }
  render(){
    return (
      <div>
      Code goes here
      <Conditional isLogged={this.state.isLogged}/>
      <Button isLogged={this.state.isLogged} handleClick={this.handleClick}/>
      </div>
      )
  }

}


/* function App() {

return (
<div>
Code goes here
</div>
)

} */

export default App