import React from 'react'
import {MDBRow} from 'mdbreact';
import {MDBCol} from 'mdbreact';
export const FoodShow = ({food,handleAddProduct}) => {
    const {name,unit,size,calorie,protein,carbohydrate,fat,details}=food
    return (
        <MDBCol md="4">
        <div class="card" style={{width: "18rem",marginBottom:"20px",marginTop:"50px"}}>
  <div class="card-header">Daily Meal</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{name}</li>
    <li class="list-group-item">{size} {unit}</li>
    <li class="list-group-item">Calorie: {calorie}</li>
    <li class="list-group-item">Protein : {protein}</li>
    <li class="list-group-item">Carbohydrate : {carbohydrate}</li>
    <li class="list-group-item"> Fat : {fat}</li>
    <li class="list-group-item">Details : {details}</li>
    <button 
        className="main-btn" onClick={()=>{
            handleAddProduct(food)
            alert(`Your Meal Item added ${name}`)
        } }
        
        >
             add cart</button>
        
  </ul>
</div>
</MDBCol>

    )
}
