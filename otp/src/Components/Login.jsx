import {React,useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import {Container,Button} from "react-bootstrap"
import Loading from "../Components/Loading"
import {useHistory} from "react-router-dom"
import "../App.css"

const Login = () => {

    let history = useHistory();
   let email = localStorage.getItem("email")
    const [otp,setOtp] = useState("")
    const [loading,setLoading] = useState(false);
    const [btndisabled,setbtndisabled] = useState(false);

    useEffect(()=>{
        if(email.length>0 && otp.length>0){
            setbtndisabled(false)
        }else{
            setbtndisabled(true)
        }
    },[otp])

    

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        await fetch("https://otplogins.herokuapp.com/login",{
            method:"POST",
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify({
                email:email,
                otp:otp

            })
        }).then((res) => res.json()).then((res) => {
            alert("Login success")
            localStorage.removeItem("email")
            console.log(res)
            history.push("/dummy")

            

        })
        .catch((error) => console.log(error))
        

    }



    return(
       <Container>
           
           <h1 className="heading">Enter the otp [if not received <Link to="/">Click here</Link> ]</h1>

        <div className="inout">  <input type = "text" className="input-goup input" value={otp} onChange={(e)=>setOtp(e.target.value)}/></div> 
         
         {
             loading?<Loading/>:<div className="btnout"><Button className="btn btn-primary btn" type="submit" onClick={submitHandler} disabled={btndisabled}>Submit</Button></div> 

         }
         
         
         

       </Container>

    )}

export default Login;