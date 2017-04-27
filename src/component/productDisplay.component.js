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

const productDisplay = (props) => {
    const productList = props.prod.products;
    return (
        <div>
            {
                productList.map((item) => (
                    props.match.params.id == item._id ?
                        <div>
                            <SingleProduct key={item._id} item = {item} disp={props} />
                        </div>:
                        ""
                ))
            }
        </div>
    )
}

export default productDisplay;

