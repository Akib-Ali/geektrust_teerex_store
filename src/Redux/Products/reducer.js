import { PRODUCT_LOADING,PRODUCT_SUCCESS,PRODUCT_ERROR,CURRENT_PRODUCT_LOADING,CURRENT_PRODUCT_SUCCESS,CURRENT_PRODUCT_ERROR } from "./actionType";


const initialState={

    loading:false,
    error:false,
    products:[],
    currentProduct:{}
}

const productReducer=(state=initialState,action)=>{

    switch(action.type){

     case PRODUCT_LOADING:
        return {...state,loading:true, error:false}

        case PRODUCT_ERROR:
            return {...state,loading:false, error:true}

            case PRODUCT_SUCCESS:
                return{...state, loading:false, error:false, products: action.payload}


                default:
                    return state


    }





}

export {productReducer}
