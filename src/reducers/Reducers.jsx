import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    a: 0
}

// this kind of things we were doing before when need to use middleware(thunk & saga)
// temp((state,action) =>{
//     action.type = 'Increment';
//     state.a = action.payload
// })

export const customReducer = createReducer(initialState, {

    increment: (state) => {
        state.a += 1
    },
    incrementByValue: (state, action) => {
        // state.a += 1
        state.a += action.payload

    },
    decrement: (state) => {
        state.a -= 1
    }
})