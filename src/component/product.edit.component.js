/**
 * Created by anurag on 27/4/17.
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
    updateProduct
} from './../actions'

class productEdit extends Component{
    constructor(props){
        super(props);
        this.state ={
            data:{

            }
        }
    }
    componentWillMount(){
        const prods = this.props.prods;
        let {data} = this.state;
        prods.products.map((item) => {
            if(item._id == this.props.match.params.id){
                let data=item;
                this.setState({data});
            }
        })

    }
    onChangeHandler = (event) => {
        let {data}= this.state;
        data[event.target.name]=event.target.value;
        this.setState({data});
    }
    updateHandler = (event) => {
       // console.log(this.props)
        this.props.prods.dispatch(updateProduct(this.state))
        this.setState({
            data:{

            }
        });
        this.props.history.push('/')
    }


    render(){
        console.log('final state',this.state);
        const { data } = this.state;
        return(<div>
            <div className="container">
                <div className="row">
                    <h2>Product Detail</h2>
                    <div className="col-md-4">
                        <div className="col-md-3 col-lg-3 " >
                            <img alt="User Pic" src="http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png" className="img-circle img-responsive"/></div>

                    </div>
                    <div className="col-md-8">
                        <h2>{data.name}</h2>
                        <div className=" col-md-9 col-lg-9 ">
                            <table className="table table-user-information">
                                <tbody>
                                <tr>
                                    <td>Brand:</td>
                                    <td><input type="text"
                                               name="brand"
                                               value={this.state.data.brand}
                                               onChange={this.onChangeHandler.bind(this)} /></td>
                                </tr>
                                <tr>
                                    <td>Price:</td>
                                    <td><input type="text"
                                               name="price"
                                               value={this.state.data.price}
                                               onChange={this.onChangeHandler.bind(this)}
                                    /></td>
                                </tr>
                                </tbody>
                            </table>
                            <div>
                                <button type="submit"
                                        className="btn btn-success"
                                        onClick={this.updateHandler.bind(this)}
                                >Save</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

}
export  default productEdit;