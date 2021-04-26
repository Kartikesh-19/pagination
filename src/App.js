import React, {useState, useEffect, memo} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { fetchData } from './actions/Action';
const App = () => {
  const dispatch = useDispatch();
  const [rowLimit]=useState(13)
  const [firstValue, setFirstValue] = useState(0);
  const [lastValue, setLastValue] = useState(rowLimit);
  const [finalData, setFinalData] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [pageLimit, setPageLimit] = useState(0);
  const [get, setget] = useState(0);
  const [disable,setDisable]=useState(true);

useEffect(() => {
  dispatch(fetchData())
}, [])

const api = useSelector(state => state)



  useEffect(() => {
    if(api.Reducer.Data.length > 0){
      setFinalData(api.Reducer.Data.slice(firstValue, lastValue))
      setPageLimit(api.Reducer.Data.length/rowLimit)
      console.log()
    }
  },[firstValue, api])
console.log("finalData", finalData)
return (
  <div className="App">

  <h1 className='text-center text-dark'>REDUX PAGINATION</h1>
  
    <table>

      <th>AlbumID</th>
      <th>Id</th>   
      <th>Title</th>
      <th>ThumbnailUrl</th>
      <tbody>
        {finalData && finalData.map((data , i)=>{
          return (
         <tr key={data.id}>
        <td>{data.i}</td>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td><img src={data.thumbnailUrl}/></td>
        </tr>)})}
      </tbody>
    </table>

  <br/>
  <button id='btn' onClick={()=>{
  
    setFirstValue(0)
    setLastValue(rowLimit)
    setPageCount(1)
    }}
  
 className='text-success' >First</button>
  <button id="btn1" onClick={()=>{
    if(firstValue > 0 && lastValue > rowLimit){
      setFirstValue(firstValue - rowLimit)
      setLastValue(lastValue - rowLimit)
      if(pageCount > 1){
        setPageCount(pageCount - 1)
      }
    }
    }} className='text-primary'>Prev</button>

  <button id='btn2' onClick={()=>{
    setget(0)
    if(get === 1){
      setFirstValue(firstValue - rowLimit)
      setLastValue(lastValue - rowLimit)
    }
  }} className='text-warning'>{pageCount}</button>
  
  <button  id ='btn3' onClick={()=>{
    setget(1)
    if(get === 0){
      setFirstValue(firstValue + rowLimit)
      setLastValue(lastValue + rowLimit)
    }
  }} className='text-success'>{pageCount + 1}</button>
  
  <button id='btn4' onClick={()=>{
    setDisable(true)
    console.log('gvjhjh',finalData)
    if(firstValue < api.Reducer.Data.length-rowLimit && lastValue < api.Reducer.Data.length){
      setFirstValue(firstValue + rowLimit)
      setLastValue(lastValue + rowLimit)
      if(pageCount < pageLimit - 1){
        setPageCount(pageCount + 1)
      }
    }}} className='text-warning'>Next</button>
  
  <button id='btn5' onClick={()=>{
    
    setFirstValue( api.Reducer.Data.length-rowLimit)
    setLastValue(api.Reducer.Data.length)
    setPageCount(Math.round(api.Reducer.Data.length/rowLimit))
}} className='text-primary'>Last</button>
</div>
  );
}

export default memo(App);