import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    icon: {
      width: 50,
    },
    delete: {
      marginLeft: 200,
    }
  }));

const ShoppingCart = ({ShoppingcardList, setShoppingcardList}) => {
    const classes = useStyles();
    const theme = useTheme();

    const handleAddItem = (size, title) => {
      var tempCart = ShoppingcardList.slice(0);
      let i;
      for(i = 0; i < tempCart.length; i++){
        if(size === tempCart[i].size && title === tempCart[i].title){
          tempCart[i].quantity += 1;
          break;
        }
      }
      setShoppingcardList(tempCart);
    }

    const handleRemoveItem = (size, title) => {
      var tempCart = ShoppingcardList.slice(0);
      let i;
      for(i = 0; i < tempCart.length; i++){
        if(size === tempCart[i].size && title === tempCart[i].title){
          if(tempCart[i].quantity == 1){
            return;
          }
          tempCart[i].quantity -= 1;
          break;
        }
      }
      setShoppingcardList(tempCart);
    }

    const handleDeleteItem = (size, title) => {
      var tempCart = ShoppingcardList.slice(0);
      let i;
      for(i = 0; i < tempCart.length; i++){
        if(size === tempCart[i].size && title === tempCart[i].title){
          tempCart.splice(i, 1);
          setShoppingcardList(tempCart);
          break;
          
        }
      }
      
    }

    return(
        <React.Fragment>
        {ShoppingcardList.map(item => 
            <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography component="h7" variant="h7">
                    {item.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {"$" + item.price}
                </Typography>
                <p variant="subtitle1" color="textSecondary">
                  <RemoveCircleIcon className={classes.icon} onClick = { () => handleRemoveItem(item.size, item.title)}/>
                    {item.quantity}
                  <AddCircleIcon className={classes.icon} onClick = { () => handleAddItem(item.size, item.title)}/>

                  <DeleteForeverIcon className={classes.delete} onClick = { () => handleDeleteItem(item.size, item.title)}/>
                </p>
                <Typography variant="subtitle1" color="textSecondary">
                   {item.size}
                </Typography>
                
                </CardContent>
                <div className={classes.controls}>
                 </div>
             </div>
             <br></br>
             <br></br>
            </Card>
            
         )}

        </React.Fragment>
         
    );

}

export default ShoppingCart;