import React, { useReducer } from 'react'

const About = () => {

    const initialState = 0

    const reducer = (state, action) => {
        if (action.type === 'increment') {
            return state + 1

        }
        if ( state > 0 && action.type === 'decrement') {
            return state - 1
        }return state;
    };

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className='card-c'>
                <h1 style={{padding:'10px 10px 0 50px'}}>hello we use the useReducer method</h1>
                <h1 style={{ marginLeft: '400px' }}> {state} </h1>
            </div>
            <button onClick={() => dispatch({ type: 'increment' })} style={{ width: '30%', margin: '0 0 5px 500px', borderRadius: '20px', backgroundColor: 'chartreuse' }} >increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })} style={{ width: '30%', margin: '0 0 5px 500px', borderRadius: '20px', backgroundColor: 'chartreuse' }} >decrement</button>
        </>
    )
}

export default About;
