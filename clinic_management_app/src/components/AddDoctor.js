import '../styles/Table.css'
import { useState } from 'react'
import { useLocation } from "react-router";
import { Col, Row, Container } from "@kunukn/react-bootstrap-grid";  


const AddDoctor = (props) => {

    const specialityOptions = ["Orthodontist", "Cardiologist", "Dietician", "Opthalmologist", "Paediatrician", "Gastroentrologist", "Diabetologist"];

    const _id = new URLSearchParams(useLocation().search).get('_id');
    const doctorNumber = new URLSearchParams(useLocation().search).get('doctorNumber');
    const name = new URLSearchParams(useLocation().search).get('name');
    const qualification = new URLSearchParams(useLocation().search).get('qualification');
    const speciality = new URLSearchParams(useLocation().search).get('speciality');

    const [localState, setLocalState] = useState({ _id: _id ? _id : "",doctorNumber: doctorNumber ? doctorNumber : "", name: name ? name : "", qualification: qualification ? qualification : "", speciality: speciality ? speciality : ""})

    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, [e.target.name]: e.target.value });
    };

    const onclickAddDoctor = (e) => {
        e.preventDefault();
        props.addDoctor(localState);
    }

    const onclickEditDoctor = (e) => {
        e.preventDefault();
        props.editDoctor(localState)


    }




    return (

        <div>

            <form>
             <h1 style={{ textAlign: "center" }}>{props.mode==="edit"? "EDIT DOCTOR FORM":"ADD NEW DOCTOR FORM"}</h1>
                <div style={{ textAlign: "center" }}><label for="dNo">DOCTOR NUMBER :</label> {props.mode==="edit"? <input type="number" name="doctorNumber" value={localState.doctorNumber} onChange={handleChange} required disabled />:<input type="number" name="doctorNumber" value={localState.doctorNumber} onChange={handleChange} required />}<br /><br />
                <label for="dNa">NAME : </label>   {props.mode==="edit"? <input type="text" name="name" value={localState.name} onChange={handleChange} required disabled />:<input type="text" name="name" value={localState.name} onChange={handleChange} required />}<br /><br />
                    <label for="dQa">QUALIFICATION : </label><input type="text" name="qualification" value={localState.qualification} onChange={handleChange} required /><br /><br />
                    <label for="dSpl">SPECIALITY : </label>{props.mode==="edit"? <select name="speciality" value={localState.speciality} onChange={handleChange} required disabled><br /><br />
                        <option value={specialityOptions[0]}>Orthodontist</option>
                        <option value={specialityOptions[1]}>Cardiologist</option>
                        <option value={specialityOptions[2]}>Dietician</option>
                        <option value={specialityOptions[3]}>Opthalmologist</option>
                        <option value={specialityOptions[4]}>Paediatrician</option>
                        <option value={specialityOptions[5]}>Gastroentrologist</option>
                        <option value={specialityOptions[6]}>Diabetologist</option>
                    </select>:<select name="speciality" value={localState.speciality} onChange={handleChange}><br /><br />
                        <option value={specialityOptions[0]}>Orthodontist</option>
                        <option value={specialityOptions[1]}>Cardiologist</option>
                        <option value={specialityOptions[2]}>Dietician</option>
                        <option value={specialityOptions[3]}>Opthalmologist</option>
                        <option value={specialityOptions[4]}>Paediatrician</option>
                        <option value={specialityOptions[5]}>Gastroentrologist</option>
                        <option value={specialityOptions[6]}>Diabetologist</option>
                    </select>}<br /><br />
                 {props.mode==="edit"?   <button style={{height:"50px", width:"120px"}} onClick={onclickEditDoctor}>SAVE DOCTOR</button>:<button style={{height:"50px", width:"200px"}} onClick={onclickAddDoctor} >ADD DOCTOR</button>}<br /><hr /><br />
                    {props.doctorData && props.doctorData.addDoctorSuccess ? props.doctorData.addDoctorSuccess : ""}
                </div>
            </form>
        </div>
    )
}

export default AddDoctor;