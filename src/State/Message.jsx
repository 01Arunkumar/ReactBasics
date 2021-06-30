import React from "react";
class Message extends React.Component{
    state={
        Message:"hello"
    };
    gmHandler=()=>{
        this.setState({Message:"gud morning"})
    };
    gnHandler=()=>{
        this.setState({Message:"gud night"})
    };
    render(){
        return<>
            <div className="container mt-4">
                <div className="row">
                    <div className="col md-5">
                        <div className="card">
                            <div className="card-Header">
                            <h1>{this.state.Message}</h1>
                            </div>
                            <div className="card-Body">
                                <button className="btn btn-success mr-4" onClick={this.gmHandler}>gm</button>
                                <button className="btn btn-warning mr-4" onClick={this.gnHandler}>gn</button>
                                <hr/>
                                <h1> hello </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Message;