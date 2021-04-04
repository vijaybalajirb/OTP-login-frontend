import React from "react";
import { useState,useEffect } from "react";
import {useHistory} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button} from "react-bootstrap"
import Loading from "../Components/Loading"

import "../App.css"

const Register = () => {

    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false);
    const [btndisabled,setbtndisabled] = useState(false);

    useEffect(()=>{
        if(email.length>0){
            setbtndisabled(false)
        }else{
            setbtndisabled(true)
        }
    },[email])

    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem("email",email)
        setLoading(true)
        fetch("https://otplogins.herokuapp.com/register",{
            method:"POST",
            headers:{
                'Content-type':"application/json"
            },
            body:JSON.stringify({
                email:email

            })
        }).then((res) => {setLoading(false)}).then((res) => {
            history.push("/login")
        })
        .catch((error) => console.log(error))
        

    }



    return(
       <Container>
           <h1 className="heading">Enter the email to login</h1>

        <div className="inout">  <input type = "text" className="input-goup input" value={email} onChange={(e)=>setEmail(e.target.value)}/></div> 
         
         {
             loading?<Loading/>:<div className="btnout"><Button className="btn btn-primary btn" type="submit" onClick={submitHandler} disabled={btndisabled}>Next</Button></div> 

         }
         
         
         

       </Container>
    )

}

export default Register;
