import React from 'react'

export const Cart = ({cart}) => {
    const totalcalorie=cart.reduce((total,prd)=>total+prd.calorie*prd?.quantity,0);
    const totalcalories=(totalcalorie).toFixed(2);
    const totalprotein=cart.reduce((total,prd)=>total+prd.protein*prd?.quantity,0);
    const totalproteins=(totalprotein).toFixed(2);
    const totalcarbohydrate=cart.reduce((total,prd)=>total+prd.carbohydrate*prd?.quantity,0);
    const totalcarbohydrates=(totalcarbohydrate).toFixed(2);
    const totalfat=cart.reduce((total,prd)=>total+prd.fat*prd?.quantity,0);
    const totalfats=(totalfat).toFixed(2);
    
    return (
        <div class="card" style={{width: "18rem",marginBottom:"20px",marginTop:"50px"}}>
        <h2>Your Meal</h2>
  <div class="card-header">Daily Meal</div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Total Item : {cart.length}</li>
  <li class="list-group-item">Total calories : {totalcalories}</li>
  <li class="list-group-item">Total proteins : {totalproteins}</li>
  <li class="list-group-item">Total carbohydrates : {totalcarbohydrates}</li>
  <li class="list-group-item">Total fats : {totalfats}</li>
    {/* {cart.map(perMeal=>{
        return(
           <div>
           <li class="list-group-item">meal name: {perMeal.name}</li>
            <li class="list-group-item">{perMeal.size} {perMeal.unit}</li>
    <li class="list-group-item">Calorie: {perMeal.calorie}</li>
    <li class="list-group-item">Protein : {perMeal.protein}</li>
    <li class="list-group-item">Carbohydrate : {perMeal.carbohydrate}</li>
    <li class="list-group-item"> Fat : {perMeal.fat}</li>

           </div>
        )
    })} */}
        
  </ul>
</div>
    )
}
