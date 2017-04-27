import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './product';
import {
    BrowserRouter as Router ,
    Link
    ,Route,
    Redirect
} from 'react-router-dom';
import {
fetchProducts
} from './../actions/';
import ProductDisplay from './productDisplay.component';
import {
    browserHistory
} from 'react-router';
import UpdateProduct from './product.edit.component';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.dispatch(fetchProducts());
    }

    render(){
       const prod = this.props;
       console.log(prod);


        return(
            <div className="container">
                <Router history={browserHistory}>
                    <div>
                        <Route
                            exact path="/"
                            render={ props => ( <Product
                                {...props}
                            prod={prod}/>)}
                        />
                        <Route
                            exact path="/product/:id"
                            render={ props => (<ProductDisplay
                                    {...props}
                                    prod={prod}/>)}
                        />
                        <Route
                            exact path="/product/update/:id"
                            render = { props => (<UpdateProduct
                                    {...props}
                                    prods={prod}/>)
                            }
                        />
                    </div>
                </Router>

            </div>
        )
    }

}
const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;