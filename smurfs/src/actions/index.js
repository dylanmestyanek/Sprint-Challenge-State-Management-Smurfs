import axios from "axios"

export const FETCHING_SMURFS = "FETCHING_SMURFS"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE" 

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS })
    axios.get("http://localhost:3333/smurfs")
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}