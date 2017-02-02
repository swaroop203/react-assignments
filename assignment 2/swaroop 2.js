import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
      return (
        <div>
          <ColorComp myColor="#a77343" thing="Swaroop"/>
          <ColorComp myColor="#757575" thing="Sonu"/>
          <ChildProp name="I'm Swaroop " >This is a random color code is: #a77343</ChildProp>
          <ChildProp name="I'm sonu ">This is a random color code is: #757575</ChildProp>
        </div>
      )
     }
   }
   const ColorComp = (props)=><h1 Style={Swaroopstyle}>{props.thing}</h1>//created a color component
const Sonustyle = {
  color:"#757575"
};
const Swaroopstyle = {
  color:"#a77343"
};
// created custom propTypes
   ColorComp.propTypes = {
       myColor(props, propsName, component){
           if((props[propsName])==="#a77343"){
               return new Error(`This is Swaroop`)
           }
           if((props[propsName])==="#757575"){
               return new Error(`I am the Sonu`)
           }
         }
       }
//Using props.children
class ChildProp extends Component {
  render(){
  return(
      <div>
      <h2 Style={Sonustyle}>{this.props.name}<span>{this.props.children}</span></h2>
      </div>
    )
  }
}
export default App;
