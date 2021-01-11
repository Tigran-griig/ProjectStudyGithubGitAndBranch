import {combineReducers} from 'redux';


const reducers = ['user','files','message','avatar']

export default combineReducers(
    reducers.reduce((initial,name)=>{
        initial[name] = require(`./${name}`).default
        return initial
    },{})
)