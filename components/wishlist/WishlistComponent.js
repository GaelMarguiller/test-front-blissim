import {Typography, withStyles} from "@material-ui/core";
import GlobalContext from '../../state/global-context';
import React, {useContext} from "react";
import GridList from "@material-ui/core/GridList";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import GridListTile from "@material-ui/core/GridListTile";
import ClearIcon from '@material-ui/icons/Clear';
import ListSubheader from "@material-ui/core/ListSubheader";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const useStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: 1000,
        margin: 'auto 0'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    title: {
        margin: '1rem auto'
    }
});

const WishlistComponent = ({classes}) => {
    const context = useContext(GlobalContext);

    const handleRemoveToWishlist = (e, product) => {
        context.removeProductToWishlist(product, context.pushObject())
    }
    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Wishlist
            </Typography>
            <GridList cellHeight={380} className={classes.gridList} cols={5}>
                {context.wishlist.map((product, index) => (
                    <GridListTile key={product.image}>
                        <img src={product.image} alt={product.title} />
                        <GridListTileBar
                            title={product.title}
                            subtitle={product.price}
                            actionIcon={
                                <IconButton className={classes.icon} onClick={e => handleRemoveToWishlist(e, product)}>
                                    <ClearIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}

export default withStyles(useStyles)(WishlistComponent)
