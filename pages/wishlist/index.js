import DefaultLayaout from '../../components/DefaultLayout'
import { withStyles, Container, Grid } from '@material-ui/core'
import WishlistComponent from '../../components/wishlist/WishlistComponent'
import React from "react";

const useStyles = theme => ({
    root: {marginBottom: theme.spacing(3)},
    h1: {
        margin: theme.spacing(5, 0)
    },
    filterTitle: {
        backgroundColor: theme.palette.primary,
        color: theme.palette.light
    },
    filterListItem: {
        paddingLeft: 0,
    }
});

const Wishlist = props => {
    const {classes} = props
    return (
        <DefaultLayaout>
            <Container maxWidth="lg" className={classes.root}>

                <Grid container item xs={12} md={9} className={classes.productsListContainer}>
                    <WishlistComponent/>
                </Grid>

            </Container>
        </DefaultLayaout>
    )
}
export default withStyles(useStyles)(Wishlist)
