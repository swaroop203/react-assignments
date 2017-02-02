import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(){

    super();
      this.state={

        header:'This is a Header ',

        content:'This is Content ',

        footer:'This is Footer '
      }
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <Content contentProp={this.state.content}/>
        <Footer footerProp={this.state.footer}/>
    </div>
    );
  }
}
class Content extends Component {
render() {
    return (
      <div>
        <br/>
      <p>{this.props.contentProp}</p>
      </div>
  )
}
}
class Footer extends Component {
  render() {
    return (
      <div>
        <p>{this.props.footerProp}</p>
        <span>{this.props.Belongs}</span>
      </div>
    )
  }
}
Component.defaultProps={Belongs:'MY APP by  SONU'}
export default App;
