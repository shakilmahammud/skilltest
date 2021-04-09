import React, { useEffect, useState } from 'react'
import axios from 'axios'
import proxy from '../../../proxy.json'
import loadingImage from "../../../image/loading.gif";
import {MDBContainer} from 'mdbreact';
import {MDBRow} from 'mdbreact';
import { FoodShow } from '../FoodShow/FoodShow';
import { Search } from '../Search/Search';
import {MDBCol} from 'mdbreact';
import { Cart } from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../databaseManager';


export const Home = () => {
const accessToken =localStorage.getItem("accessToken")
const [loading,setLoading] = useState(true);
const [allfood,setAllFood]=useState([])
const [cart,setCart]=useState([]);


    const handleFood=async e=>{
        try{
            const response=await axios.get(proxy.endpoint+'food',{
                headers: {
                  authorization:accessToken
                }
              })
            if(response){
                if(response){
                    setAllFood(response.data.foods)
                  setLoading(false)
                } 
            }
           }catch (e) {
               console.log(e)
           }
    }
    
    useEffect(()=>{
        handleFood()
        const saveCart=getDatabaseCart();
        const productkeys=Object.keys(saveCart);
        const previouseCart=productkeys.map(pd=>{
       const productItem=allfood.find(pdkey=>pdkey.id===pd);
       productItem.quantity=saveCart[pd];
         return productItem;
        })
        setCart(previouseCart);
    },[loading]);
    if (loading) {
        return (
            <div className="loading">
                <h1>Processing your request...</h1>
                <img src={loadingImage} alt="" />
            </div>
        );
    }
    const handelClick=(product)=>{
        // const newCount=count+1
        // setCount(newCount)
        // console.log(newCount)
        // console.log("added product",product)
        // const newCart=[...cart,product];
        // setCart(newCart);
        const sameProduct=cart.find(pd=>pd.id===product.id);
            let count=1;
            let newCart;
            if(sameProduct){
                count=sameProduct.quantity +1;
                sameProduct.quantity=count;
                const others =cart.filter(pd=>pd.id !==product.id);
                newCart=[...others,sameProduct];
            }
            else{
                product.quantity=1;
                newCart=[...cart,product]
            }
            setCart(newCart);
            
            addToDatabaseCart(product.id, count);
    }
    
   
    return (
       <MDBContainer className="homeContainer">
       <div className="cartItem"><i class="fas fa-cart-plus"></i> </div>
       <Search setAllFood={setAllFood}/>
       <MDBRow>
       <MDBCol md="10">
           <MDBRow>
        
             {allfood.map(food=><FoodShow food={food} key={food.id} handleAddProduct={handelClick}/>)}
        
           </MDBRow>
           </MDBCol>
           <MDBCol md="2">
            <div style={{borderLeft:"2px solid #000",padding:"3px"}}>
            <Cart cart={cart} />
            </div>
           </MDBCol>
           </MDBRow>
       </MDBContainer>
    )
}
