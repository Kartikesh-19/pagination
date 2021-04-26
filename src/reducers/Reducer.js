import {TERA_DATA} from '../actions/Constants';

const initialState={
    Data:[]
}
  export default function Reducer(state=initialState,action){
    console.log(action);

    switch(action.type){
        case TERA_DATA:{
            
            return {
                ...state,
                Data: action.payload
            }
    }
        default:
            return {...state,
            }  
    }  
 
    
}