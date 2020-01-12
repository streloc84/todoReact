import React from "react"
import Button from "./button"
import Conditional from "./Conditonal"

class App extends React.Component{

  constructor(){
    super()
    this.state={
      isLogged:true
    }
  }

  render(){
    return (
      <div>
      Code goes here
      <Conditional isLogged={this.state.isLogged}/>
      <Button />
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