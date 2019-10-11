import React from "react"
import { connect } from "react-redux"

const SmurfList = ({ smurfs }) => {
    console.log("State being passed into SmurfList:", smurfs)
    return (
        <h1>SmurfList</h1>
    )
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    }
  }


  export default connect(mapStateToProps, {})(SmurfList);