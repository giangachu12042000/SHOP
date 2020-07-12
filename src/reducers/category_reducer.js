 import * as types from '../constants/types';

 const INITIAL_STATE = {
     categories:[],
     category: null
 }

 export default function (state = INITIAL_STATE, action){ 
     switch(action.type){
        case types.ADD_CATEGORY: 
            return{
                ...state, categories: action.category
            }
        default:
            return state
    }
 }