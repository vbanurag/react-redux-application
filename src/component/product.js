/**
 * Created by anurag on 26/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./css/app.css');
import ProductList from './productList.component';

const productShow = (props) => {
    const products = props.prod.products;
    return(
        <div>
            {
                products.map((item)=>(
                    <ProductList key={item._id} prod={item} />
                ))
            }
        </div>
        )
}
export default productShow;
