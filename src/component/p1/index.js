import { createStore } from 'redux';


const speakAction = () => {
    return {
        type: 'Speak'
    }
}
const speakReducer = (state, action = {}) => {
    switch (action.type) {
        case 'speak':
            return { text: "hii" }
        default:
            return state
    }
}
const store = (createStore(speakReducer))

store.dispatch(speakAction())
store.subscribe(() => {
    console.log("hello redux")
})