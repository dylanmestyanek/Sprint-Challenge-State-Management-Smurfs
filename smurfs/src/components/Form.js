import React, {useState, useImperativeHandle} from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions";

const Form = ({ addSmurf }) => {
    const [smurfInfo, setSmurfInfo] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setSmurfInfo({
            ...smurfInfo,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newSmurf = {
            ...smurfInfo,
            id: Date.now()
        }
        addSmurf(newSmurf)
        setSmurfInfo({
            name: '',
            age: '',
            height: ''
        })
    }

    return(
        <div>
            <h2>Introduce a new smurf to the family!</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name="name"
                    type="text"
                    value={smurfInfo.name}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input 
                    name="age"
                    type="number"
                    value={smurfInfo.age}
                    placeholder="Age"
                    onChange={handleChange}
                />
                <input 
                    name="height"
                    type="number"
                    value={smurfInfo.height}
                    placeholder="Height"
                    onChange={handleChange}
                />
                <button type="submit">Add Smurf!</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(Form)