import react from 'react';
import { TextField,MenuItem,FormControl,Select,Box ,Grid} from '@mui/material';


const styles={
    textfieldStyle:{
        
            height: 35,marginTop:'20px',mb:2, 
            '& .MuiInputBase-root': {
                height: '100%', 
            },
            '& .MuiOutlinedInput-root': {
                
                '&.Mui-focused fieldset': {
                    borderColor: '#BF77F6', 
                },
            },
            '& .MuiInputLabel-root': {
                top: -10,
    
            },
           
        
    },
    selectStyle:{
        
            height: 35,marginTop:'20px',mr:1,mb:2,
            '& .MuiSelect-select': {
                height: '100%', 
                display: 'flex',
                alignItems: 'center',
            },
            '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
               
            },
            
        
    }
}
const Filtercomponent=({sortOrder,setSortorder,search,setSearch})=>{
    return(
    <Box sx={{mb:2}}>
    
     <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField fullWidth placeholder='search' variant='outlined' value={search} 
     onChange={(e)=>setSearch(e.target.value)}
     sx={styles.textfieldStyle} 
   
    ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
             
     <FormControl fullWidth>
    
      <Select value={sortOrder} onChange={(e)=>setSortorder(e.target.value)}
    
        sx={styles.selectStyle}>
 <MenuItem value='asc'>price(low to high)</MenuItem>
 <MenuItem value='desc'>price(high to low)</MenuItem>
      </Select>
     </FormControl>
            </Grid>
     </Grid>
    
    </Box>
    )
}
export default Filtercomponent;