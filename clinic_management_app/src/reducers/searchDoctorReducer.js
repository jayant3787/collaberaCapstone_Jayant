
const searchDoctorReducer = (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "SEARCH_A_DOCTOR_SUCCESSFUL":
            let newState = { ...state, searchResults: action.json }
            newState.searchDoctorSuccess = "SUCCESSFULLY ADDED THE DOCTOR";
            console.log(newState);
            return newState;

        case "DELETE_DOCTOR_RESULTS":
            let newState1 = { ...state, deleteResults: action.json }
            newState1.deleteDoctorSuccess = "SUCCESSFULLY DELETED THE DOCTOR";
            return newState1;

        case "EDIT_A_DOCTOR_SUCCESSFUL":
            let newState2 = { ...state }
            newState2.editDoctorSuccess = action.serverMsg;
            return newState2;


        default:
            return state;

    };
}

export default searchDoctorReducer;