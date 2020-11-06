import React, {createContext, Component} from 'react';

const GlobalContext = createContext();
import PropTypes from 'prop-types';
import {ContextDevTool, debugContextDevtool} from "react-context-devtool";
import {keys} from "@material-ui/core/styles/createBreakpoints";

export class GlobalProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open_interstitial: false,
            cart: [],
            wishlist: [],
            pushObject: this.pushObject.bind(this),
            getCart: this.getCart.bind(this),
            getWishlist: this.getWishlist.bind(this),
            addProductToCart: this.addProductToCart.bind(this),
            addProductToWishlist: this.addProductToWishlist.bind(this),
            removeProductToWishlist: this.removeProductToWishlist.bind(this),
            removeProductToCart: this.removeProductToCart.bind(this),
        }
    }

    pushObject(key, value, callback) {
        this.setState({[key]: value}, callback);
    }

    getCart() {
        const sessionStorageCart = JSON.parse(sessionStorage.getItem('cart')); // null if not exist

        if (sessionStorageCart !== null) {
            this.setState({cart: sessionStorageCart});
        } else {
            this.setState({cart: []});
        }
    }

    getWishlist() {
        const sessionStorageCart = JSON.parse(sessionStorage.getItem('wishItem')); // null if not exist
        if (sessionStorageCart !== null) {
            this.setState({wishlist: sessionStorageCart});
        } else {
            this.setState({wishlist: []});
        }
    }

    addProductToCart(product, callback) {
        const newCart = [...this.state.cart]
        newCart.push(product)
        this.setState({cart: newCart}, () => {
            sessionStorage.setItem('cart', JSON.stringify(newCart));

            if (typeof callback !== 'undefined') callback();
        });
    }

    addProductToWishlist(product, callback) {
        const newCart = [...this.state.wishlist]
        newCart.push(product)
        newCart.map(cart => {cart.isAddToWishlist = true})
        this.setState({wishlist: newCart}, () => {
            sessionStorage.setItem('wishlist', JSON.stringify(newCart));
            if (typeof callback !== 'undefined') callback();
        });
    }

    removeProductToCart(id, callback) {
        const newCart = [...this.state.cart]
        const ProductIndex = newCart.indexOf(p => {
            p.id === id
        });
        newCart.splice(ProductIndex, 1)
        this.setState({cart: newCart}, () => {
            sessionStorage.setItem('cart', JSON.stringify(newCart));

            if (typeof callback !== 'undefined') callback();
        });
    }

    removeProductToWishlist(product, callback) {
        const newCart = [...this.state.wishlist]
        newCart.map(cart => {
            if(product.id === cart.id) {
                cart.isAddToWishlist = false
            }
        })
        for(const key in newCart){
            if(newCart[key].id === product.id){
                newCart.splice(parseInt(key), 1)
            }
        }
        this.setState({wishlist: newCart}, () => {
            sessionStorage.setItem('wishlist', JSON.stringify(newCart));

            if (typeof callback !== 'undefined') callback();
        });
    }

    componentDidMount() {
        this.getCart()
    }

    render() {
        const {children} = this.props;

        return (
            <GlobalContext.Provider value={{...this.state}}>
                {children}
            </GlobalContext.Provider>
        );
    }
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export const GlobalConsumer = GlobalContext.Consumer;
export default GlobalContext;
