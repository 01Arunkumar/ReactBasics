import React from "react";
import Counter from "./components/Counter";
import Message from "./components/Message";
class App extends React.Component{
  render(){
    return(
    <> 
     <Counter/>
     <Message/>
    </>
    );
  }
}
export default App;