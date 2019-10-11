import React, {useState} from "react"

const Form = () => {
    const [smurfInfo, setSmurfInfo] = useState({
        name: '',
        age: '',
        height: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setSmurfInfo({
            [name]: value
        })
    }

    return(
        <div>
            <h2>Introduce a new smurf to the family!</h2>
            <form>
                <input 
                    name="name"
                    type="text"
                    value={smurfInfo.name}
                    placeholder="Name"
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    name="age"
                    type="number"
                    value={smurfInfo.age}
                    placeholder="Age"
                    onChange={(e) => handleChange(e)}
                />
                <input 
                    name="height"
                    type="number"
                    value={smurfInfo.height}
                    placeholder="Height"
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Add Smurf!</button>
            </form>
        </div>
    )
}

export default Form