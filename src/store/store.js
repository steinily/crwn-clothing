import {
    compose,
    applyMiddleware
} from 'redux'
import { legacy_createStore as createStore} from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

/**
 * The loggerMiddleware function takes a store as an argument, returns a function that takes a next
 * function as an argument, which returns a function that takes an action as an argument, which logs
 * the action type, payload, current state, and next state.
 * @param store - The store object that is passed to the redux createStore function.
 * @returns A function that takes a store as an argument and returns a function that takes a next as an
 * argument and returns a function that takes an action as an argument.
 */



const persistConfig ={
    key:'root',
    storage,
    blacklist:['user'],

}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const composedEnhancer =(process.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/* Checking if the environment is not production, and if it is not, it is adding the logger middleware
to the middleware array. */
const middleWares = [ process.env.NODE_ENV !== 'production' && logger].filter(Boolean);
/* Creating a composedEnhancers object that is composed of the applyMiddleware function. */
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))



/* Creating a store object that is composed of the rootReducer, undefined, and composedEnhancers. */
export const store = createStore(persistedReducer, undefined, composedEnhancers);



export const persistor = persistStore(store)


