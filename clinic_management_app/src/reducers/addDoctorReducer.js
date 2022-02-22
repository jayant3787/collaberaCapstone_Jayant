const addDoctorReducer = (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "ADD_A_DOCTOR_SUCCESSFUL":
            let newState = { ...state }
            newState.addDoctorSuccess = action.serverMsg;
            return newState;

        default:
            return state;

    };
}

export default addDoctorReducer;