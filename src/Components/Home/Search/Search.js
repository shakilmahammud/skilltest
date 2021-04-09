import React, { useState } from 'react'
import {MDBContainer} from 'mdbreact';
import {MDBRow} from 'mdbreact';
import {MDBCol} from 'mdbreact';
import axios from 'axios';
import proxy from '../../../proxy.json'

export const Search = ({setAllFood}) => {

    const [searchFood,setSearchFood]=useState([])
   const [searchValue,setSearchValue]=useState("")
   const accessToken =localStorage.getItem("accessToken")
        const handleSearch=async e=>{
            try{
                const response=await axios.get(proxy.endpoint+`food?key=${searchValue}`,{
                    headers: {
                      authorization:accessToken
                    }
                  })
                if(response){
                    if(response){
                        setSearchFood(response.data.foods)
                      
                    } 
                }
               }catch (e) {
                   console.log(e)
               }
        }
    
    return (
       
     <MDBContainer >
         <MDBRow>
             <MDBCol md="10">
                <div style={{width:"80%",margin:"50px auto"}}>
                <input type="search"  style={{width:"80%",height:"50px",outline:"none",borderRadius:"10px",padding:"10px"}} 
                    onChange={e=>setSearchValue(e.target.value)}
                    placeholder="Write Your Meal Name Find Quicly"
                />
                <button style={{height:"50px",borderRadius:"10px",outline:"none",marginLeft:"10px",width:"15%"}} onClick={()=>{
                    if(searchValue !==""){
                        handleSearch()
                    }else{
                        alert("give the value")
                    }
                }}>Search</button>
                
                </div>
             </MDBCol>
           <MDBRow>
           {searchFood.map(food=>{
           
               return(
                <MDBCol md="4 ">
               
        <div class="card" style={{width: "18rem",marginBottom:"20px",marginTop:"50px"}}>
  <div class="card-header">Daily Meal</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{food.name}</li>
    <li class="list-group-item">{food.size} {food.unit}</li>
    <li class="list-group-item">Calorie: {food.calorie}</li>
    <li class="list-group-item">Protein : {food.protein}</li>
    <li class="list-group-item">Carbohydrate : {food.carbohydrate}</li>
    <li class="list-group-item"> Fat : {food.fat}</li>
    <li class="list-group-item">Details : {food.details}</li>
  </ul>
</div>
</MDBCol>
               )
           })}</MDBRow>
         </MDBRow>
     </MDBContainer>
    )
}
