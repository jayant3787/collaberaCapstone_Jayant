
const searchDoctorReducer = (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "SEARCH_A_DOCTOR_SUCCESSFUL":
            let newState = {...state, searchResults: action.json}
            newState.searchDoctorSuccess = "SUCCESSFULLY ADDED THE DOCTOR";
            console.log(newState);
            return newState;

            case "REMOVE_DOCTOR":
            let dNumber = action.doctorNumber;
            let [...newState2] = state;
            newState2 = newState2.filter(item => item.name !== dNumber);
            return newState2;



        default:
            return state;

    };
}

export default searchDoctorReducer;