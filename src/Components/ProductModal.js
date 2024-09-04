import React from 'react';
import {Modal,Box,Typography,Button,IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/Cartaction';

const styles = {
    boxstyle:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        boxShadow: '3px 3px 4px grey',
        p: 4,
        width: '90%',
        maxWidth: '500px', 
    },
iconBtn:{
    position:'absolute', 
    top:8,
    right:8
},
cartBtn:{
    color:"white",
    backgroundColor:'#BF77F6',
    p:1,
    mt:2
}

   
   
};
const ProductModal=({open,handleClose,product})=>{
    const dispatch=useDispatch();

    const handleAddToCart=()=>{
        dispatch(addItemToCart(product));
        handleClose();
    }
    return(
<Modal
open={open}
onClose={handleClose}>
<Box sx={{...styles.boxstyle,width:400}}>
<IconButton onClick={handleClose} color='inherit' sx={styles.iconBtn}>
<CloseIcon />
</IconButton>
<Typography variant='h6' component="h2">{product.name}</Typography>
<Typography sx={{pd:1}} color='textSecondary'>${product.price}</Typography>
<Typography sx={{pd:1}} color='textSecondary'>{product.description}</Typography>
<Button variant='contained' sx={styles.cartBtn}  onClick={handleAddToCart}>
    Add to Cart
</Button>
</Box>
</Modal>
    )
}
export default ProductModal;
