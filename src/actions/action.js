import {
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_STARTED,
    FETCH_PRODUCT_SUCCESS,
    DELTE_PRODUCT_ERROR,
    DELTE_PRODUCT_STARTED,
    DELTE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_STARTED,
    UPDATE_PRODUCT_SUCCESS
} from '../config/config.constant';

export function FETCH_PRODUCT_START() {
    return { type: FETCH_PRODUCT_STARTED };
}

export function FETCH_PRODUCT_SUCCES(products) {
    return { type: FETCH_PRODUCT_SUCCESS, products };
}

export function FETCH_PRODUCT_ERRO(err) {
    return { type: FETCH_PRODUCT_ERROR, err };
}
export function DELTE_PRODUCT_INIT() {
    return {type: DELTE_PRODUCT_STARTED}
}
export function DELTE_PRODUCT_ONSUCCESS(products) {
    return {type:DELTE_PRODUCT_SUCCESS,products}
}
export function DELTE_PRODUCT_ONERROR( err ) {
    return { type: DELTE_PRODUCT_ERROR , err}
}

export function UPDATE_PRODUCT_INIT(){
    return { type: UPDATE_PRODUCT_STARTED}
}
export function UPDATE_PRODUCT_ONSUCCESS(products){
    return { type: UPDATE_PRODUCT_SUCCESS,products}
}
export function UPDATE_PRODUCT_ONERROR(err){
    return { type: DELTE_PRODUCT_ERROR ,err}
}