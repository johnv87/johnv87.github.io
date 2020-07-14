import { combineReducers } from 'redux'
import navbarReducer from './navbarReducer'
import themeReducer from './themeReducer'
const rootReducer = combineReducers({ navbarReducer, themeReducer })

export default rootReducer
