import React, { Component } from 'react';
class App extends Component {
constructor(prop){
	super(prop);
	this.state = {
		items :[]
	}
}
componentWillMount(){
	fetch('https://swapi.co/api/people/?format=json').then(response =>response.json())
		.then(({results:items})=>this.setState({items}))
}
render(){
	let items = this.state.items
	return (
		<div>
    <table>
        <thead>
          <tr>

      <h3>Films</h3>
      <th>{items.map(item=><Films update={item}/>)}</th>
      <br/><h3>Vehicles</h3>
      <th>{items.map(item=><Vehicles update={item}/>)}</th>
      <br/><h3>StarShips</h3>
      <th>{items.map(item=><StarShips update={item}/>)}</th>
      </tr>
       </thead>

     </table>

		</div>
	)
}
}
function Films(prop){
      return(
        <div>
        <h4>{prop.update.films}</h4>
        </div>
      )
  }
function StarShips(prop){
  return(
        <div>
        <h4>{prop.update.starships}</h4>
        </div>
      )
  }
function Vehicles(prop){
      return(
        <div>
        <h4>{prop.update.vehicles}</h4>
        </div>
      )
  }
export default App;
