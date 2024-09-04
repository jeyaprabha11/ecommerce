import react from 'react';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';

const Buttoncomponent=({to,label})=>{
 return(
    <Button  sx={{color:'white'}}component={Link} to={to}>
        {label}
    </Button>
 )
}
export default Buttoncomponent;