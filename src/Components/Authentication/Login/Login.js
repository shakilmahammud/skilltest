import axios from 'axios'
import React, { useState } from 'react'
import {MDBContainer} from 'mdbreact';
import {MDBRow} from 'mdbreact';
import {MDBCol} from 'mdbreact';
import {MDBInput} from 'mdbreact';
import proxy from '../../../proxy.json'
import {  Link, useHistory} from "react-router-dom";

export const Login = () => {
    const [inputValue,setInputValue]=useState({})
   const history=useHistory()
    const handleInputValue=(e)=>{
        const newInputValue={...inputValue}
        newInputValue[e.target.name]=e.target.value
        setInputValue(newInputValue)
    }
    const handleSignin=async e=>{
        e.preventDefault();
        try{
            const response=await axios.post(proxy.endpoint+'user',{
                "email":inputValue?.email,
                "password":inputValue?.password
            })
            if(response){
                if(response.status===200){
                  localStorage.setItem("accessToken",response.data.accessToken)
                  history.replace("/home")
                } 
            }
           }catch (e) {
               console.log(e)
           }
          
    } 


    return (
        <MDBContainer className="m-auto">
  <MDBRow>
    <MDBCol md="12">
    <div style={{maxWidth:"550px",margin:"0 auto"}}>
    <form style={{marginTop:"200px",}} onSubmit={handleSignin}>
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" name="email" onChange={handleInputValue}/>
          <MDBInput label="Type your password" icon="lock" group type="password" validate  name="password" onChange={handleInputValue}/>
        </div>
        <div className="text-center">
          <input type="submit" value="Login" style={{padding:"10px 24px",border:"none",borderRadius:"10px"}}/>
        </div>
        <Link to="/signup"> <div> Don't Have an Account?</div></Link>
      </form>
    </div>
    </MDBCol>
  </MDBRow>
</MDBContainer>
    )
}
