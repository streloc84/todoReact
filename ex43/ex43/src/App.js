import React, {Component} from "react"
class App extends Component {
constructor() {
super()
this.state = {
  firstName:"",
  lastName:"",
  age:0,
  gender:"",
  destination:"",
  vegan: false
}
this.handleChange=this.handleChange.bind(this)
}

handleChange(event){
  const{name,value,type,checked}=event.target
  if(type==="radio"){this.setState({[name]:checked})}
  if(type==="checkbox"){}
  this.setState({
    [name]:value
  })
}

render() {
return (
<main>
<form>
<input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} /><br />
<input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} /><br />
<input type="text" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange} /><br />
<label><input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}/>Male</label>
<label><input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange}/>Female</label>
<br />
<label></label>
<select value={this.state.destination} name="destination" onChange={this.handleChange}>
  <option>Paris</option>
  <option>Gadyukino</option>
</select>
<input type="checkbox" placeholder="Веган?" name="vegan" checked={this.state.vegan} onChange={this.handleChange}/>
{/* Здесь создайте поле со списком для выбора пункта
назначения */}
<br />
{/* Здесь создайте флажки для указания диетологических
ограничений */}
<br />
<button>Submit</button></form>
<hr />
<h2>Entered information:</h2>
<p>Your name: {this.state.firstName} {this.state.lastName}</p>
<p>Your age: {this.state.age}</p>
<p>Your gender: {this.state.gender}</p>
<p>Your destination: {this.state.destination}</p>
<p>
Your dietary restrictions:
{/* Список диетологических ограничений */}
</p>
</main>
)
}
}
export default App