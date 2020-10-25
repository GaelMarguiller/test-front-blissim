import {
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    withStyles,
    IconButton,
} from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, {useContext, useState} from 'react';
import GlobalContext from '../../state/global-context';

const useStyles = theme => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    content: {
        width: '100%',
    },
    thumbnailContainer: {
        padding: theme.spacing(2),
        textAlign: 'cetner',
    },
    thumbnail: {
        maxHeight: '170px',
        width: 'auto',
        margin: 'auto',
    },
    name: {
        fontSize: '1rem',
    }
});

const ProductCard = (props) => {
    const {classes, product} = props
    const context = useContext(GlobalContext);
    const [isAddToWishlist, setToWishlist] = useState(product.isAddToWishlist);

    const handleAddToCart = (e, product) => {
        context.addProductToCart(product, context.pushObject('open_interstitial', true))
    }

    const handleClickWishlist = (e, product) => {
        e.preventDefault();
        if(isAddToWishlist === true) {
            setToWishlist(false)
            context.removeProductToWishlist(product, context.pushObject())
        } else {
            setToWishlist(true)
            context.addProductToWishlist(product, context.pushObject())
        }
    }
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div className={classes.thumbnailContainer}>
                    <CardMedia
                        component='img'
                        alt={product.title}
                        image={product.image}
                        className={classes.thumbnail}
                        title='Contemplative Reptile'
                    />
                </div>
                <Typography gutterBottom component='h2' className={classes.name}>
                    {product.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {product.desc}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={e => handleAddToCart(e, product)}>
                    <ShoppingBasketIcon color='secondary'/>
                </IconButton>
                <IconButton onClick={e => handleClickWishlist(e, product)}>
                    {!isAddToWishlist
                        ? <FavoriteBorderIcon style={{ color: '#ff0000' }}/>
                        : <FavoriteIcon style={{ color: '#ff0000' }}/>
                    }
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default withStyles(useStyles)(ProductCard)
