import React from "react";
class Header extends React.Component{
    render(props){
        return(
        <>
        <h1>user details</h1>
        <hr/>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>userName:{this.props.userName}</h1>
        <button type="button" class="btn btn-danger">Danger</button>
        </>
        );
    }
}
export default Header;