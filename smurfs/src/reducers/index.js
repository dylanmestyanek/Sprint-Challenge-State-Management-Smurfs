import {
    FETCHING_SMURFS,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    fetchSmurfs
} from "../actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const Reducer = (state = initialState, action) => {
    console.log("This is state from the Reducer:", state)
    switch(action.type){
        case FETCHING_SMURFS:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }

        default:
            return state;
    }
}

export default Reducer