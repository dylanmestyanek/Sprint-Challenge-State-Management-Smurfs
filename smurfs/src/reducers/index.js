import {
    FETCHING_SMURFS,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADDING_SMURF,
    SUCCESS_ADD_SMURF,
    FAIL_ADD_SMURF
} from "../actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    isAddingSmurf: false,
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
        case ADDING_SMURF:
            return {
                ...state,
                isAddingSmurf: true
            }
        case SUCCESS_ADD_SMURF:
            return {
                ...state,
                isAddingSmurf: false,
                smurfs: [...state.smurfs, action.payload]
            }
        case FAIL_ADD_SMURF:
            return {
                ...state,
                isAddingSmurf: false,
                error: action.payload
            }
            

        default:
            return state;
    }
}

export default Reducer