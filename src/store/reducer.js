import {combineReducers} from 'redux'
import oneReducer from '../components/home/oneReducer'

const reducer = combineReducers({
    one:oneReducer
})

export default reducer;