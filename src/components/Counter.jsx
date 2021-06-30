import React from "react";
class Counter extends React.Component{
    state={
        Counter:0
    };
    incrHandler= ()=>{
        this.setState({Counter: this.state.Counter+1})
    };
    decrHandler=()=>  {
        this.setState({Counter: this.state.Counter-1})
    } 
     render(){
        return<>
         <div className="container mt-5">
         <div className="row">
         <div className="col md-5">
         <div className="card">
         <div className="card-Header">
         <h1>qty:{this.state.Counter}</h1>
        </div>
            <div className="card-body">
          <button className="btn btn-success" onClick={this.incrHandler}>incr</button>
          <button className="btn btn-danger" onClick={this.decrHandler}>decr</button>
          </div>    
          </div>
          </div>
          </div>
          </div>
        </>
    }
}
export default Counter;