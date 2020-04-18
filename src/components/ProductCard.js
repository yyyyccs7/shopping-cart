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


const useStyles = makeStyles({
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
    }
  });

const ProductCard = ({product}) => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
  
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

      <CardActions>
        <Button size="small" className={classes.button}>
          S
        </Button>
        <Button size="medium" className={classes.button}>
          M
        </Button>
        <Button size="larger" className={classes.button}>
          L
        </Button>
        <Button size="xlarge" className={classes.button}>
          XL
        </Button>
        
      </CardActions>
    </Card>
      );
  };
  
  export default ProductCard;