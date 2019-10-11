const initialState = {
    smurfs: []
}

const Reducer = (state = initialState, action) => {
    console.log("This is state from the Reducer:", state)
    switch(action.type){
        default:
            return state;
    }
}

export default Reducer