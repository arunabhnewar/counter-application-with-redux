// Select DOM elements
const counterElement = document.querySelector("#counter");
const incrementElement = document.querySelector("#increment");
const decrementElement = document.querySelector("#decrement");


// Action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";


// Action creation
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    }
}


const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    }
}


// Initial State
const initialState = {
    value: 0,
}


// Create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload,
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload,
        }
    } else {
        return state;
    }
}

// Create Store
const store = Redux.createStore(counterReducer);


const render = () => {
    const state = store.getState();
    counterElement.innerHTML = state.value.toString();
}

// update UI initially
render();

store.subscribe(render);

// Event listeners
incrementElement.addEventListener('click', () => {
    store.dispatch(increment(10));
});


decrementElement.addEventListener('click', () => {
    store.dispatch(decrement(5));
})