import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "../reducers/Reducers"

const Store = configureStore({
    reducer: {
        custom: customReducer
    }
})

export default Store;


// here reducer will combine all action and we can also pass multiple reducer
// reducer means it's like applying action 