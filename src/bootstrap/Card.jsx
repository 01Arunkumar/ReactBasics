import React from "react";
class Card extends React.Component{
   State= {
    Message:"Hello,good morning"
   };

   messageHandler=()=>{
       this.setState({Message:"gud night"})
   };

    render(){
        return<>
                 <h1>{this.State.Message}</h1>
                 <button className="btn btn-success" onClick={this.messageHandler}>change Message</button>
                </>          
                   
    }
}
export default Card;