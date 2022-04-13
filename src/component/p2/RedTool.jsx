
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RedTool = () => {
    // const value = 20;
    const Dispatch = useDispatch()
    const { a } = useSelector((state) => state.custom)

    const btn1 = () => {
        Dispatch({
            type: 'increment'
        })
        console.log('click btn1')
    }
    const btn2 = () => {
        Dispatch({
            type: 'incrementByValue',
            payload: 25
        })
        console.log('click btn2')
    }
    const btn3 = () => {
        Dispatch({
            type: 'decrement'
        })
        console.log('click btn3')
    }

    return (
        <div>
            <h3>{a}</h3>
            <button onClick={btn1}>Increnment</button>
            <button onClick={btn2}>incrementByValue</button>
            <button onClick={btn3}>Decrenment</button>
        </div>
    )
}

export default RedTool;