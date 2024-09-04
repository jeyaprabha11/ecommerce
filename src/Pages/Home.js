import react from 'react';
import ProductList  from '../Components/ProductList';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import electronics from '../assets/images/electronics.jpeg';
import fashion from '../assets/images/dress.jpeg';

const Home=()=>{
    return(
        <div>
        <Container>
            <Typography variant='h2'  sx={{marginTop:'20px',textAlign:'center',fontFamily: "Times New Roman, Times, serif"}}>
                Welcome to the click<span style={{color:'red'}}>N</span>shop!
            </Typography>
            <Typography variant='h6'  sx={{marginBottom:'40px',textAlign:'center',fontStyle:'italic'}}>
              Discover our new collections of products and enjoy the great Deals!!
            </Typography>
            <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: '20px', textAlign: 'center' }}>
            <img src={electronics} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
            <Typography variant="h5" gutterBottom>
            Electronics
            </Typography>
            <Typography>
              Explore our latest range of electronics, from laptops to smartphones.
            </Typography>
            <Button variant="contained"  component={Link} to="/electronics" sx={{ marginTop: '10px',backgroundColor:'#BF77F6' }}>
              Shop Electronics
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: '20px', textAlign: 'center' }}>
          <img src={fashion} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
            <Typography variant="h5" gutterBottom>
             Fashion
            </Typography>
            <Typography>
              Check out the latest trends in clothing.
            </Typography>
            <Button variant="contained"  component={Link} to="/clothing" sx={{ marginTop: '10px',backgroundColor:'#BF77F6' }}>
              Shop Clothing
            </Button>
          </Paper>
        </Grid>
      </Grid>
        </Container>
        </div>
    )
}
export default Home;
