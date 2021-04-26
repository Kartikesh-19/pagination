import {TERA_DATA} from './Constants';
import axios from 'axios';

export const fetchData = () => dispatch =>{
  
   axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then((res)=>{
        console.log("response" ,res);
      dispatch({
        type: TERA_DATA,
        payload: res.data
      });
    })
   .catch((err)=>{
      dispatch({
        type: TERA_DATA,
        payload: err
        
      });
    })
    
  }
  fetchData();
  