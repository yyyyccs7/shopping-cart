import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
  }));

const ShoppingCart = ({ShoppingcardList, setShoppingcardList}) => {
    const classes = useStyles();
    const theme = useTheme();

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
                <Typography variant="subtitle1" color="textSecondary">
                    {item.quantity}
                </Typography>
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