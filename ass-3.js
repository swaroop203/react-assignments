import React from 'react';

class App extends React.Component {
   constructor() {

      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.text = "";
      this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   };

   forceUpdateHandler() {
      this.forceUpdate();
   };
    makeid()   {
           this.possible.charAt(Math.floor(Math.random() * possible.length));
}
   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
            <h4>Random variable: {Math.random()}</h4>
         </div>
      );
   }
}

export default App;
