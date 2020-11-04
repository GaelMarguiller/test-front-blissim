import DefaultLayaout from "../../../components/DefaultLayout";
import {Container, Grid, Typography, withStyles} from "@material-ui/core";
import ProductsList from "../../../components/boutique/ProductsList";
import React from "react";

const useStyles = theme => ({
    root: {marginBottom: theme.spacing(3)},
});

let productsDatas = [
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "isAddToWishlist": false
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "isAddToWishlist": false
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "isAddToWishlist": false
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "isAddToWishlist": false
    }
]

const menClothing = ({classes}) => {
    return (
        <DefaultLayaout>
            <Container maxWidth="lg" className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item>
                        <Typography variant="h3" component="h1" className={classes.h1}>Jewelery</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={9} className={classes.productsListContainer}>
                        <ProductsList products={productsDatas}/>
                    </Grid>
                </Grid>
            </Container>
        </DefaultLayaout>
    )
}

export default withStyles(useStyles)(menClothing)
