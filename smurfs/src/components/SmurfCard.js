import React from "react"
import axios from "axios"

const SmurfCard = ({ smurf }) => {
    
    const removeSmurf = () => {
        axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(res => console.log(res))
            .catch(err => console.log("DELETION FAILED:", err))
        // console.log(smurf.id)
    }

    return(
        <div>
            <h2>Meet, {smurf.name}!</h2> 
            <p>{smurf.name} is {smurf.age} smurf years old and {smurf.height} short!</p>
            <button onClick={removeSmurf} >Remove from Smurf Fam!</button>
        </div>
    )
}

export default SmurfCard