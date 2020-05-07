import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from "./ShoppingCart"


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    height: 600,
  },
  media: {
    height: 400,
  },
  title: {
      height: 10,
      marginBottom: 20,
      textAlign: "center",
  },
  description: {
      height: 30,
      textAlign: "center",
  },
  price: {
      height: 20,
      textAlign: "center",
  },
  button: {
      background: '#2F4F4F',
      color: 'white'
  },
  title: {
    flexGrow: 1
  }
}));

const ProductCard = ({product, remain, ShoppingcardList, setShoppingcardList}) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const theme = useTheme();

    const [size, setSize] = useState('')
    console.log(remain)
    
    const avaliable = (sku, size) =>{
      if(remain[sku] === undefined){
        return;
      }
      else if(remain[sku][size] <= 0){
        return true;
      }
      else if(remain[sku][size] > 0){
       return false;
      }
    }


    const handleShoppingCart = (x, title, price, sku) => {
      setSize(x);
      var tempCart = ShoppingcardList.slice(0);

      let carditem = {
        size: '',
        price: '',
        title: '',
        quantity: '',
        sku: ''
      }

      //handle duplicate
      let i;
       for(i = 0; i < tempCart.length; i++){
         if(x === tempCart[i].size && title === tempCart[i].title){
           if(remain[sku][x] <= 0){
             alert("out of stock");
             break;
           }
           tempCart[i].quantity += 1;
           remain[sku][x] -= 1;
           break;
         }
       }

        if(i === tempCart.length){
          if(remain[sku][x] <= 0){
            alert("out of stock");
          }
          else{
            carditem.size = x;
            carditem.price = price;
            carditem.title = title;
            carditem.quantity = 1;
            carditem.sku = sku;
            remain[sku][x] -= 1;
            tempCart.push(carditem);
          } 
       }
      setShoppingcardList(tempCart);
    };
  
    return (

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={"data/products/"+product.sku+"_1.jpg"}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="p" component="h2" >
            {product.title}
          </Typography>

          <Typography className={classes.description} component="h2">
            {product.description}
          </Typography>

          <Typography className={classes.price} variant="h6" component="h2">
            {"$" + product.price}
          </Typography>

        </CardContent>

      </CardActionArea>

      <div>
        <CardActions>
              <Button disabled={avaliable(product.sku, "S")} className={classes.button} onClick={() => handleShoppingCart('S', product.title, product.price, product.sku)} >
                S
              </Button>
              <Button disabled={avaliable(product.sku, "M")} className={classes.button} onClick={() => handleShoppingCart('M', product.title, product.price, product.sku)}>
                M
              </Button>
              <Button disabled={avaliable(product.sku, "L")} className={classes.button} onClick={() => handleShoppingCart('L', product.title, product.price, product.sku)}>
                L
              </Button>
              <Button disabled={avaliable(product.sku, "XL")} className={classes.button} onClick={() => handleShoppingCart('XL', product.title, product.price, product.sku)}>
                XL
              </Button>

          </CardActions>
      </div>
      
    </Card>
    
      );
  };
  
  export default ProductCard;