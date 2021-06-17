import Footer from "./Footer";
function Header(){
    let emp_Name= "Kavitha";
    let emp_Code= 101;
    let emp_Loc=["banglore", "chennai","pune"];
    let emp= {fullName:"sunanda" ,Salary:50000 , Loc:"Banglore"};
    return ( 
    <>
    <h1>Header component -data= {emp_Name}</h1>
     <hr/>
     <Footer user_Name={emp_Name} user_Code={emp_Code} user_Loc={emp_Loc} user_Details={emp}/>
    </>
    );
} 
export default Header;