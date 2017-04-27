import {
    FETCH_PRODUCT_ERRO,
    FETCH_PRODUCT_START,
    FETCH_PRODUCT_SUCCES,
    DELTE_PRODUCT_INIT,
    DELTE_PRODUCT_ONERROR,
    DELTE_PRODUCT_ONSUCCESS,
    UPDATE_PRODUCT_INIT,
    UPDATE_PRODUCT_ONSUCCESS,
    UPDATE_PRODUCT_ONERROR
} from './action';

export function fetchUser() {
    return (dispatch) => {
        dispatch(FETCH_USER_START());
        fetch('http://anuragsharma.com:4000/api/user')
            .then(response => response.json())
            .then(users => {
                dispatch(FETCH_USER_SUCCES(users))
            })
            .catch((err) => {
                dispatch(FETCH_USER_ERRO(err))
            })
    }
}
export function addUser() {
    return (dispatch) => {
        fetch('http://anuragsharma.com:4000/api/user', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": 78,
                "userName": "James",
                "emailId": "james@gmail.com"
            })
        }).then(res => {
            dispatch({ type: "USER_ADD", res })
        }).catch((err) => {
            dispatch({ type: "USER_ADD_FAILED", err })
        })
    }
}
export function fetchProducts() {
    return (dispatch) => {
        dispatch(FETCH_PRODUCT_START());
        fetch('http://anuragsharma.com:4000/api/product', {
            method: 'get'
        }).then(res => res.json())
            .then( products => {
                dispatch(FETCH_PRODUCT_SUCCES(products))
            })
            .catch((err) => {
                 dispatch(FETCH_PRODUCT_ERRO(err))
            })
    }
}
export function deleteProduct(productId){
    return (dispatch) => {
        dispatch(DELTE_PRODUCT_INIT());
        fetch('http://anuragsharma.com:4000/api/product',{
            method:'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({prodId:productId})
        })
            .then(res => res.json())
            .then(products => {
                dispatch(DELTE_PRODUCT_ONSUCCESS(products))
            })
            .catch((err) => {
                dispatch(DELTE_PRODUCT_ONERROR(err))
            })
    }
}

export function updateProduct(product) {
    return (dispatch) => {
        dispatch(UPDATE_PRODUCT_INIT())
        fetch('http://anuragsharma.com:4000/api/product', {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(products => {
                dispatch(UPDATE_PRODUCT_ONSUCCESS(products))
            })
            .catch((err) => {
                dispatch(UPDATE_PRODUCT_ONERROR(err))
            })


    }
}