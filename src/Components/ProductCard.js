import react from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/Cartaction';

const styles = {
    cardStyle: {
        height: '350px', 
        ml: 2,
         mr: 2, 
         mb: 2, 
         transition: 'transform 0.2s ease-in-out', 
         '&:hover': {
            boxShadow: '3px 4px 4px grey'
        }
    },
    cardcontent: {
        textAlign: 'right',
    }, 
    namestyle: {
        fontSize: '17px', 
        pb: '3px',
    },
    cartBtn: {
        color: "white", 
        backgroundColor: '#BF77F6', 
        p: 1, 
        mr: 1
    },
    detailsBtn: {
        color: 'black', 
        border: '1px solid #BF77F6', 
        backgroundColor: 'white'
    },
    mediaBtn: {
        width: 200,
        height: 200,
        objectFit: 'cover',
}


}

const ProductCard = ({ product, onClick }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItemToCart(product));
    }
    return (
        <Card sx={styles.cardStyle}>
            <CardMedia component="img" height='140' image={product.imageUrl}
                alt={product.name}
                sx={styles.mediaBtn} />

            <CardContent sx={styles.cardcontent}>
                <Typography sx={styles.namestyle}>{product.name}</Typography>
                <Typography sx={{ mt: 1 }}>
                    ${product.price}
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <Button variant="contained" sx={styles.cartBtn} onClick={handleAddToCart}>Add to Cart</Button>
                    <Button variant='contained' sx={styles.detailsBtn} onClick={onClick}>View Details</Button>
                </Box>
            </CardContent>
        </Card>
    )
}
export default ProductCard;