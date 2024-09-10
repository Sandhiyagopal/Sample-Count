import Store from './redux/store';
import React, {useDispatch,useSelector} from 'react';
import {actionFun } from './redux/action'
export default function App() {

    const dispatch =useDispatch();
    const count = useSelector(state=>state.count)
    const incrementHandler=()=>{
        dispatch(actionFun())
    }
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"70vh"}}>
            <h3>Cont Value : {count}</h3>
            <button onClick={incrementHandler}>+</button>
        </div>
    )
}
