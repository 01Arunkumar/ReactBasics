import React from "react";
import Header from "./Header";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

class App extends React.Component{
  Name= "Arun"
  pin = 585413
  details={salary:100000, native:"halbarga"}
  render(){
    return(
    <>
      <h1>userName:{this.Name}</h1>
      <Header userdetails={this.details}/>
      <hr/>
      <Navbar/>
      <Card/>

    </>
    );
  }
}
export default App;


