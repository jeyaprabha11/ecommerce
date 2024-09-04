import { ADD_ITEM_TO_CART,REMOVE_ITEM_FROM_CART } from "./Carttype";

export const addItemToCart=(item)=>({
    type: ADD_ITEM_TO_CART,
    payload:item,
});

export const removeitemfromcart=(id)=>({
   type:REMOVE_ITEM_FROM_CART,
   payload:id,
});