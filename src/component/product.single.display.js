/**
 * Created by anurag on 26/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./css/app.css');
import {
    Link
    ,Route,
    Redirect
} from 'react-router-dom';
import {
    deleteProduct,
    fetchProducts
}from './../actions/action.async'

class singleProduct extends Component{
    constructor(props){
        super(props)
    }

    clickHandler(id){
        this.props.disp.prod.dispatch(deleteProduct(id));
        this.props.disp.history.push('/')
        //console.log('submit called',this.props)
    }
    editHandler(id){
        this.props.disp.history.push('/product/update/'+id);
    }

    render(){

        const item = this.props.item;
        return(
           <div>
               <div className="container">
                   <div className="row">
                       <h2>Product Detail</h2>
                       <div className="col-md-4">
                           <div className="col-md-3 col-lg-3 " >
                               <img alt="User Pic" src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png" className="img-circle img-responsive"/></div>

                       </div>
                       <div className="col-md-8">
                           <h2>{item.name}</h2>
                           <div className=" col-md-9 col-lg-9 ">
                               <table className="table table-user-information">
                                   <tbody>
                                   <tr>
                                       <td>Brand:</td>
                                       <td>{item.brand}</td>
                                   </tr>
                                   <tr>
                                       <td>Price:</td>
                                       <td>{item.price}</td>
                                   </tr>
                                   </tbody>
                               </table>
                               <div>
                                   <button type="submit"
                                           className="btn btn-primary"
                                           onClick={this.editHandler.bind(this,item._id)}
                                   >Edit</button>

                                       <button type="submit"
                                               className="btn btn-success"
                                               onClick={this.clickHandler.bind(this,item._id)}
                                       >Delete</button>

                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

const singleProductContainer = connect(state => state)(singleProduct);
export default singleProductContainer;