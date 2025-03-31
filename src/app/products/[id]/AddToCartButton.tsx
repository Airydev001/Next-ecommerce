"use client";

import { useState, useTransition } from "react";
import { incrementProductQuantity } from "./actions";

interface AddToCartButtonProps{
productId: string,
incrementProductQuantity : (productId: string) => Promise<void>
}
export default function AddToCartButton({productId} :AddToCartButtonProps){
 

const [isPending, startTransition]=useTransition();
const [success, setSuccess]= useState(false);


    return (
        <div className="flex items-center gap-2">
            <button className="btn btn-primary" 
            onClick={()=>{
// setSuccess(false);
startTransition(async()=>{
await incrementProductQuantity(productId);
setSuccess(true);
})
            }}>Add to Cart 
                 <svg color="red" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="black">
  <path d="M7 4H3V6H5L8 14H18L21 7H8L7 4ZM8 16C7.45 16 7 16.45 7 17C7 17.55 7.45 18 8 18C8.55 18 9 17.55 9 17C9 16.45 8.55 16 8 16ZM16 16C15.45 16 15 16.45 15 17C15 17.55 15.45 18 16 18C16.55 18 17 17.55 17 17C17 16.45 16.55 16 16 16Z"/>
</svg>
            
                 </button>
{
  isPending && <span className="loading loading-spinner loadiing-md"/>
}
{
    !isPending && success && (
        <span className="text-success">Added to Cart</span>
    )
}
        </div>
    )
}