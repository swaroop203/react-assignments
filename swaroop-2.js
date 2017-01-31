import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor(){
      super();
        this.state={
          Sonu:' Hi,I am Sonu',
          Swaroop:'Hi,I am  Swaroop',
          Mythri:'We r from  Mythri'
        }
    }
render() {
      return (
        <div>
          <Sonu SonuProp={this.state.Sonu}/><br/>
          <Swaroop SwaroopProp={this.state.Swaroop}/><br/>
          <Mythri MythriProp={this.state.Mythri}/>
        </div>
      );
  }
  }
class Mythri extends Component {
    render() {
      return (
        <div>
          <br/>
          <p>{this.props.MythriProp}</p>
        </div>
      )
    }
  }
  class Sonu extends Component {
    render() {
      return (
        <div>
          <br/>
          <p>{this.props.SonuProp}</p>
        </div>
      )
    }
  }
  class Swaroop extends Component {
    render() {
      return (
        <div>
          <p>{this.props.SwaroopProp}</p>
          <p>{this.props.defProp}</p>
        </div>
      )
  }
}
  Component.defaultProps={defProp:'Hi, I am  .......'}
  export default App;
