import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import ProductCard from './ProductCard.js'

const useStyles = makeStyles({
    root: {
      maxWidth: 250,
      height: 350,
    },
    media: {
      height: 140,
    },
  });

  const ProductList = ({user, products, remain, ShoppingcardList, setShoppingcardList}) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  
    return (

        <React.Fragment>
            <Container>
                <Grid container spacing={2} direction="row">
                    {products.map(product => 
                     <Grid item xs={3}>
                        <ProductCard user={user} product={product} remain = {remain} ShoppingcardList={ShoppingcardList} setShoppingcardList={setShoppingcardList}></ProductCard>
                    </Grid>
                    )}
                </Grid>
            </Container>
        </React.Fragment>
      );
  };
  
  export default ProductList;