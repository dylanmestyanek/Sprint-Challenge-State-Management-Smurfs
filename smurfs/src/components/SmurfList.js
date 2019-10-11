import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchSmurfs } from "../actions"

const SmurfList = ({ 
    smurfs, 
    fetchSmurfs 
}) => {

    useEffect(() => {
        fetchSmurfs();
    }, [fetchSmurfs])
    
    console.log("State being passed into SmurfList:", smurfs)
    return (
        <h1>SmurfList</h1>
    )
}

const mapStateToProps = state => {
    console.log("MapState state", state)
    return {
      smurfs: state.smurfs
    }
  }

  export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);