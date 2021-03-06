import Header from './header/Header'
import Footer from './footer/Footer'
import { ThemeProvider} from "@material-ui/styles"
import { withStyles } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core';
import theme from '../theme/theme';

// ===== Basic Layout ===== //
const useStyles = (theme) => ({
    root: {
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column'
    },

    main: {
        flex: '1 0 auto',
    }
});

const  DefaultLayout = (props) => {
    const {classes} = props
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>

                {/*Header*/}
                <Header/>

                <main className={classes.main}>
                    {props.children}
                </main>

                {/*footer*/}
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default withStyles(useStyles)(DefaultLayout)
