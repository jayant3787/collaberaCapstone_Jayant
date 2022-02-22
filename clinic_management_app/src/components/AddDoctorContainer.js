import AddDoctor from "./AddDoctor";
import { connect } from 'react-redux';
const mapStateToProps = (store) => {
    console.log("inside the reducer2");
    return {
        doctorData: store.reducer2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDoctor: (doctorObj) => dispatch({ type: "ADD_A_DOCTOR_TO_BACKEND", doctor: doctorObj }),
        editDoctor : (doctorObj) => dispatch({type:"EDIT_A_DOCTOR_TO_BACKEND",doctor: doctorObj}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDoctor);
