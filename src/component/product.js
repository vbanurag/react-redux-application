/**
 * Created by anurag on 26/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./css/app.css');
import ProductList from './productList.component';

class productShow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const products = this.props.prod.products;
        return(
           <div>
               {
                   products.map((item)=>(
                       <ProductList key={item._id} prod={item}/>
                   ))
               }
           </div>

        )
    }
}

export default productShow;