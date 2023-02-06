import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "../Reducers/counter-reducer";


const RootReducer = combineReducers({
   count: countReducer
})

export type storeType = ReturnType<typeof RootReducer>

export const store = legacy_createStore(RootReducer)

