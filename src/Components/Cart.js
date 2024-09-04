import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeitemfromcart } from '../redux/Cartaction';

import { Avatar, Button,List,ListItem,ListItemText,Typography,ListItemAvatar } from '@mui/material';

const Cart=()=>{
    const dispatch=useDispatch();
    const cartItems=useSelector(state=>state.cart.cartItems);

    const handleRemove=(id)=>{
   dispatch(removeitemfromcart(id));
    };
    const totalPrice=cartItems.reduce((total,item)=>total+item.price*item.quantity,0);

    return(
        <div>
            <Typography variant='h4'>Shopping Cart</Typography>
            {
                cartItems.length > 0 ? (
                  
                    <List>
                    {cartItems.map(item =>(
                        <ListItem key={item.id}>
                            <ListItemAvatar>
                                <Avatar src={item.imageUrl} alt={item.name}/>
                            </ListItemAvatar>
                         <ListItemText primary={item.name}
                         secondary={`$${item.price} x ${item.quantity}`}/>
                        <Button variant='outlined' color='error' onClick={()=>handleRemove(item.id)}>Remove</Button>
                        </ListItem>
                       
                    ))}
                </List>
               
                ):(
                    <Typography variant='h6'  sx={{mt:2}}>Your cart is currently empty.</Typography>

                )
            }
            
            {
                cartItems.length > 0 && (
<Typography variant='h6'>Total : ${totalPrice.toFixed(2)}</Typography> 
                ) 
            }
          
        </div>
    )
}
export default Cart;