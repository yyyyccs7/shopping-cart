import React, { useState, useEffect }from 'react';
import './App.css';
import firebase from './firebase.js'
import ProductList from './components/ProductList.js'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from 'clsx';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCart from "./components/ShoppingCart"


const App = () => {
  const drawerWidth = 400;

  const [data, setData] = useState({});
  const products = Object.values(data);
  const productid = Object.keys(data);
  const [remain, setRemain] = useState({});
  const[ShoppingcardList, setShoppingcardList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();

    const fetchList = async () => {
      const response = await fetch('./data/inventory.json');
      const json = await response.json();
      setRemain(json);
    };
    fetchList();
  }, []);

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    title: {
      flexGrow: 1
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginRight: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginRight: 0
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let totalprice = 0;
  ShoppingcardList.map(each => {
    totalprice = totalprice + each.price*each.quantity
  })

  return (
    <React.Fragment>
         <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Shopping Cart
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
        
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            <Typography variant="h6" noWrap className={classes.title}>
              Cart
            </Typography>
          </IconButton>
        </div>
        
        <Divider />
       
        
        <ShoppingCart remain = {remain} ShoppingcardList={ShoppingcardList} setShoppingcardList={setShoppingcardList}/>
        <p className={classes.price}> The total price is: {totalprice}</p>
        
      </Drawer>

    </div>

        <ProductList products={products} remain = {remain} ShoppingcardList={ShoppingcardList} setShoppingcardList={setShoppingcardList} />

        
      </React.Fragment>
    
  );
};

export default App;
