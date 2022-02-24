import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Table.css";
const SearchDoctor = (props) => {
  const specialityOptions = [
    "Orthodontist",
    "Cardiologist",
    "Dietician",
    "Opthalmologist",
    "Paediatrician",
    "Gastroentrologist",
    "Diabetologist",
  ];
  const [localState, setLocalState] = useState({speciality:""});

  const handleChange = (e) => {
    e.preventDefault();
    setLocalState({ ...localState, [e.target.name]: e.target.value });
    console.log(setLocalState);
    console.log(e.target.value);
    console.log(e.target.name);
  };

  const searchDoctor = (e) => {
    e.preventDefault();
    props.searchDoctor(localState.speciality);
  };

  const removeDoctor = (e, doctorNum) => {
    e.preventDefault();
    props.removeDoctor(doctorNum);
  };

  return (
    <div>
      <form>
        <h1>DOCTOR SEARCH FORM</h1>
        <h2>
          <b>SEARCH BY</b>
        </h2>
        <label>
          <b>SPECIALITY :</b>
        </label>
        <select
          name="speciality"
          onChange={handleChange}
          value={localState.speciality}
        >
          <option value={specialityOptions[0]}>Orthodontist</option>
          <option value={specialityOptions[1]}>Cardiologist</option>
          <option value={specialityOptions[2]}>Dietician</option>
          <option value={specialityOptions[3]}>Opthalmologist</option>
          <option value={specialityOptions[4]}>Paediatrician</option>
          <option value={specialityOptions[5]}>Gastroentrologist</option>
          <option value={specialityOptions[6]}>Diabetologist</option>
        </select>
        &nbsp;
        <button onClick={searchDoctor}>SEARCH</button>
        <hr />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th>DOCTOR NUMBER</th>
              <th>NAME</th>
              <th>QUALIFICATION</th>
              <th>SPECIALITY</th>
              <th>EDIT ACTION</th>
              <th>DELETE ACTION</th>
            </tr>
            {props.doctorData.searchResults
              ? props.doctorData.searchResults.map((item, key) => (
                  <tr>
                    <td>{item.doctorNumber}</td>
                    <td>{item.name}</td>
                    <td>{item.qualification}</td>
                    <td>{item.speciality}</td>
                    <td>
                      <Link
                        to={{
                          pathname:
                            "/doctors/edit/?doctorNumber=" +
                            item.doctorNumber +
                            "&_id=" +
                            item._id +
                            "&name=" +
                            item.name +
                            "&qualification=" +
                            item.qualification +
                            "&speciality=" +
                            item.speciality,
                        }}
                      >
                        EDIT
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={(e) => removeDoctor(e, item.doctorNumber)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
        {props.doctorData.deleteDoctorSuccess
          ? props.doctorData.deleteDoctorSuccess +
            "search again to refresh the search results"
          : ""}
      </form>
    </div>
  );
};

export default SearchDoctor;
