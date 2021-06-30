import React from "react";
import Counter from "./components/Counter";
import Message from "./components/Message";
class App extends React.Component{
  render(){
    return(
    <> 
     <Counter/>
     <hr/>
     <Message/>
    </>
    );
  }
}
export default App;