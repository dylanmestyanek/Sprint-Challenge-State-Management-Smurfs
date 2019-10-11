import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchSmurfs } from "../actions"
import SmurfCard from "./SmurfCard"

const SmurfList = ({ 
    smurfs, 
    fetchSmurfs 
}) => {

    useEffect(() => {
        fetchSmurfs();
    }, [fetchSmurfs, smurfs])
    
    console.log("State being passed into SmurfList:", smurfs)
    return (
        <div>
            <h1>Smurf's up!</h1>
            <p>Get it...? Instead of surf's up.. nevermind.</p>
            {
                smurfs.map(smurf => {
                    return <SmurfCard key={smurf.id} smurf={smurf} />
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    console.log("MapState state", state)
    return {
      smurfs: state.smurfs
    }
  }

  export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);