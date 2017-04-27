/**
 * Created by anurag on 26/4/17.
 */
/**
 * Created by anurag on 26/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./css/app.css');
import SingleProduct from './product.single.display'

class productDisplay extends Component{
    constructor(props){
        super(props);
    }
    render(){

        const productList = this.props.prod.products;
        return(
            <div>
                {
                    productList.map((item) => (
                        this.props.match.params.id == item._id ?
                            <div>
                                <SingleProduct key={item._id} item = {item} disp={this.props} />
                            </div>:
                            ""
                    ))
                }
            </div>
        )
    }
}

export default productDisplay;

