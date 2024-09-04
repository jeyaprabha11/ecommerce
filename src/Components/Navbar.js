import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography,Box,IconButton,Badge} from '@mui/material';
import Buttoncomponent from './Buttoncomponent';
import {useSelector} from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const styles={
    appbarStyle:{
         backgroundColor: '#BF77F6' 
    },
    nameStyle:{
        flexGrow:1,
        fontStyle:"italic",
        fontFamily:'Times new roman',
        fontSize:23
    },
    subnameStyle:{
        color:"red",
        fontSize:25,
        fontWeight:'bold'
    },
boxStyle:{
    display: 'flex', 
    gap: 2 
},
toolbarStyle:{
     display: 'flex', 
     flexDirection: 'column', 
     alignItems: 'center' 
}


}
 const Navbar=()=>{
  const cartItems=useSelector(state=>state.cart.cartItems)
  const cartCount= cartItems.reduce((total,item)=>total+item.quantity,0);
  return (
    <AppBar position="static" sx={styles.appbarStyle} >
     <Toolbar  sx={styles.toolbarStyle}>
        <Typography variant="h6" sx={styles.name}>
      click<span style={styles.subnameStyle}>N</span>shop  
        </Typography>
        <Box sx={styles.boxStyle}>
        <Buttoncomponent  to='/' label='Home'/>
      <Buttoncomponent to='/electronics' label='Electronics' />
      <Buttoncomponent to='/clothing' label='Clothing'/>
      <IconButton component={Link} to="/cart" sx={styles.cartButtonStyle}>
                        <Badge badgeContent={cartCount} color="error">
                            <ShoppingCartIcon sx={{color:'white'}}/>
                        </Badge>
                    </IconButton>
        </Box>
     
     </Toolbar>
    </AppBar>
  )
}
export default Navbar;