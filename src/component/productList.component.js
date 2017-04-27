/**
 * Created by anurag on 26/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router ,Link ,Route } from 'react-router-dom';
require('./css/app.css');

class productDisplay extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const product = this.props.prod;
        return(
            <div id="products" className=" list-group">
                <div className="item  col-xs-4 col-lg-4">
                    <div className="thumbnail">
                        <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                        <div className="caption">
                            <h4 className="group inner list-group-item-heading">
                                {product.name}</h4>
                            <p className="group inner list-group-item-text">
                                {product.brand}</p>
                            <div className="row">
                                <div className="col-xs-12 col-md-6">
                                    <p className="lead">
                                        ${product.price}</p>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <Link to= {'/product/'+product._id}><button className="btn btn-success">View Product</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default productDisplay;

