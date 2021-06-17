function Footer(props){
    return(
    <div>
    <pre>{JSON.stringify(props)}</pre>
    <h1>user Name= {props.user_Name}</h1>
    <h2>user location={props.user_Loc[0]}</h2>
    <h1> user details={props.user_Details.fullName}</h1>
    </div>
    )
}
export default Footer;