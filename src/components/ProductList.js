import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

  const ProductList = ({products}) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  
    return (

        <React.Fragment>
            <Container>
                <Grid container spacing={2} direction="row">
                    {products.map(product => 
                     <Grid item xs={3}>
                        <ProductCard product={product} key={products.sku}></ProductCard>
                    </Grid>
                    )}
                </Grid>
            </Container>
        </React.Fragment>
      );
  };
  
  export default ProductList;