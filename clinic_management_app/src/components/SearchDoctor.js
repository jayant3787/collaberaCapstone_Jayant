import { useState } from "react";
import '../styles/Table.css'
const SearchDoctor = (props) => {
    const specialityOptions = ["Orthodontist", "Cardiologist", "Dietician", "Opthalmologist", "Paediatrician", "Gastroentrologist", "Diabetologist"];
    const [localState, setLocalState] = useState({ speciality: "" });

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });
        console.log(setLocalState);
        console.log(e.target.value);
        console.log(e.target.name);
    };

    const searchDoctor = (e) => {
        e.preventDefault();
        // store.dispatch({ type: "ADD", playName: localState2.nAdd, playAge: localState2.aAdd, playAwards: localState2.awAdd })
        props.searchDoctor(localState.speciality);
    }


    const [localState1, setLocalState1] = useState({ doctorToRemove: "" });

    const handleChange1 = (e) => {
        e.preventDefault();
        setLocalState1({ ...localState1, doctorToRemove: e.target.value });

    };


    const removeDoctor = () => {
        // store.dispatch({ type: "REMOVE_NAME", playerName: localState.playerToRemove });
        // console.log("latest store data is :");
        // console.log(store.getState());
        props.removeDoctor(localState1.doctorToRemove)

    }



    return (
        <div>
        {/* <hr style={{border:"2px solid brown"}}/> */}
            <h1>DOCTOR SEARCH FORM</h1>
            {/* <hr style={{border:"2px solid brown"}}/> */}
            <h2 style={{ margin: "50px" }}><b>SEARCH BY</b></h2>
            <form style={{ margin: "50px" }}>
                <label>SPECIALITY : </label>
                <select name="speciality" onChange={handleChange} value={localState.value} >
                    <option value={specialityOptions[0]}>Orthodontist</option>
                    <option value={specialityOptions[1]}>Cardiologist</option>
                    <option value={specialityOptions[2]}>Dietician</option>
                    <option value={specialityOptions[3]}>Opthalmologist</option>
                    <option value={specialityOptions[4]}>Paediatrician</option>
                    <option value={specialityOptions[5]}>Gastroentrologist</option>
                    <option value={specialityOptions[6]}>Diabetologist</option>
                </select>&nbsp;

                <button onClick={searchDoctor}>SEARCH</button><hr />

                <table style={{ width: "100%" }}>
                    <tr>
                        <th>DOCTOR NUMBER</th>
                        <th>NAME</th>
                        <th>QUALIFICATION</th>
                        <th>SPECIALITY</th>
                        <th>EDIT ACTION</th>
                        <th>DELETE ACTION</th>
                    </tr>
                    {props.doctorData.searchResults ? props.doctorData.searchResults.map((item, key) => <tr><td> {item.doctorNumber}</td><td> {item.name}</td><td> {item.qualification}
                    </td><td>{item.speciality} </td><td><button>EDIT</button></td><td><button onClick={(e) => removeDoctor(item.doctorToRemove)} >DELETE</button></td></tr>) : ""}

                </table>

            </form>
        </div>
    )
}

export default SearchDoctor;