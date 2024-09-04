import React, { useState } from 'react';
import {Grid, Grid2} from '@mui/material';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import Filtercomponent from './Filtercomponent';

import { products } from '../Data/Products';

const ProductList=({category})=>{
   const [selectedProduct,setSelectedProduct]=useState(null);
   const [isModalopen,setModalopen]=useState(false);
   const [search,setSearch]=useState('');
   const [sortOrder,setSortorder]=useState('asc');
  

   const filterProducts =products.filter(product => (category ? product.category===category:true) && 
(search ? product.name.toLowerCase().includes(search.toLowerCase()):true))
.sort ((a,b)=>sortOrder==='asc' ? a.price-b.price : b.price-a.price);

const handleopenModal=(product)=>{
    setSelectedProduct(product);
    setModalopen(true);

}
const handleCloseModal=()=>{
    setSelectedProduct(null);
    setModalopen(false);
}
return(
    <div>
        <Filtercomponent 
      
        setSortorder={setSortorder}
        sortOrder={sortOrder}
        search={search}
        setSearch={setSearch}
        />
        <Grid container spacing={3} >
            {filterProducts.map(product =>(
                <Grid item sx={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} onClick={()=>handleopenModal(product)}/>
                </Grid>
            ))}
        </Grid>
        {selectedProduct && (
            <ProductModal
            open={isModalopen} 
            handleClose={handleCloseModal}
            product={selectedProduct}
             />
        )}
    </div>
)
}
export default ProductList;