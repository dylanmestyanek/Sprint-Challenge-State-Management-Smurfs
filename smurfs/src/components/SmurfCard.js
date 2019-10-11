import React from "react"

const SmurfCard = ({ smurf }) => {
    return(
        <div>
            <h2>Meet, {smurf.name}!</h2> 
            <p>{smurf.name} is {smurf.age} smurf years old and {smurf.height} short!</p>
        </div>
    )
}

export default SmurfCard