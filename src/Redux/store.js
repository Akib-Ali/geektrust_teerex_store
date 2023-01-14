import { legacy_createStore , applyMiddleware , combineReducers,compose } from "redux";
import thunk from 'redux-thunk'

import { productReducer } from "./Products/reducer";

const rootReducer = combineReducers({

    product: productReducer
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}