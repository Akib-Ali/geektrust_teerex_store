import { PRODUCT_LOADING,PRODUCT_SUCCESS,PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_SUCCESS,CURRENT_PRODUCT_ERROR } from "./actionType";



const handleLoading=(payload)=>({

    type:PRODUCT_LOADING,
    payload
})

const handleError=()=>({
    type:PRODUCT_ERROR
})

const handleSuccess=(payload)=>({
    type:PRODUCT_SUCCESS,
    payload

})

//add thunk

const getdata=(payload)=> (dispatch)=>{
    dispatch(handleLoading())

    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",{
        params:{
            ...payload
        }

    }).then((res)=> res.json())
    .then((res)=> dispatch(handleSuccess(res)))
    .catch(()=>   dispatch(handleError()))



}


export {getdata,handleLoading,handleError,handleSuccess}