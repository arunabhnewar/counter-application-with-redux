// Select DOM elements
const counterElement = document.querySelector("#counter");
const incrementElement = document.querySelector("#increment");
const decrementElement = document.querySelector("#decrement");


// Initial State
const initialState = {
    value: 0,
}


// Create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1,
        }
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1,
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
    store.dispatch({
        type: 'increment',
    });
});


decrementElement.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement',
    });
})