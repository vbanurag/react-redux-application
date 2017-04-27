/**
 * Created by anurag on 26/4/17.
 */
import {
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_STARTED,
    FETCH_PRODUCT_SUCCESS,
    DELTE_PRODUCT_STARTED,
    DELTE_PRODUCT_SUCCESS,
    DELTE_PRODUCT_ERROR,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_STARTED,
    UPDATE_PRODUCT_ERROR
} from './../config/config.constant';

const intialState = {
    products: [],
    loading: false,
    err: null,
    isUpdate:false
}

export const productReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_STARTED:
        {
            return {
                ...state,
                loading: true,
                err:null
            }
        }
        case FETCH_PRODUCT_SUCCESS:
        {
            let products = state.products.concat(action.products);
            return {
                ...state,
                products: products,
                loading: false,
                err:null
            }
        }
        case FETCH_PRODUCT_ERROR:
        {
            return {
                ...state,
                err: action.err
            }
        }
        case DELTE_PRODUCT_STARTED:{
            return {
                ...state,
                loading: true,
                err:null
            }
        }
        case DELTE_PRODUCT_SUCCESS:{
            let products = action.products;
            return {
                ...state,
                products: products,
                loading: false,
                err:null,

            }
        }
        case DELTE_PRODUCT_ERROR:{
            return {
                ...state,
                loading: true,
                err:action.err
            }
        }
        case UPDATE_PRODUCT_STARTED: {
            return {
                ...state,
                loading: true,
                err:null
            }

        }
        case UPDATE_PRODUCT_SUCCESS : {
            let products = action.products;
            return {
                ...state,
                products:products,
                loading: true,
                err:null
            }
        }
        case UPDATE_PRODUCT_ERROR: {
            return {
                ...state,
                loading: true,
                err:action.err
            }
        }
    }
    return state;
}
