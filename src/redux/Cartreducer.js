import { json } from "react-router-dom";
import { ADD_ITEM_TO_CART,REMOVE_ITEM_FROM_CART } from "./Carttype";

const initialState={
    cartItems : JSON.parse(localStorage.getItem("cartItems"))||[]
}

const Cartreducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEM_TO_CART : {
            const itemToAdd=action.payload;
            const existingItem=state.cartItems.find(item=>item.id===itemToAdd.id);
            let updateCarditems;
            if(existingItem){
               
                   
                    updateCarditems= state.cartItems.map(item=> item.id===itemToAdd.id ? {
                        ...item,quantity : item.quantity + 1} : item
                    );
                    
                }
                else {
                    
                        updateCarditems= [...state.cartItems,{...itemToAdd,quantity:1}]
                   
                }
                localStorage.setItem('cartItems',JSON.stringify(updateCarditems))
                return{
                    ...state,
                    cartItems:updateCarditems,
                }
            }
            case REMOVE_ITEM_FROM_CART :
                {
                  
                      
                        const updateCarditems = state.cartItems.filter(item=> item.id !== action.payload);
                        localStorage.setItem('cartItems', JSON.stringify(updateCarditems));
                        return{
                            ...state,
                            cartItems:updateCarditems
                        }
                 
                }
              default :
              return state;
        }
    };

    export default Cartreducer;

