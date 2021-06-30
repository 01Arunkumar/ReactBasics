import React from "react";
import Counter from "./components/Counter";
import Message from "./Message";
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