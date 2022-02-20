
const searchDoctorReducer = (state = {}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case "SEARCH_A_DOCTOR_SUCCESSFUL":
            let newState = {...state, searchResults: action.json}
            newState.searchDoctorSuccess = "SUCCESSFULLY ADDED THE DOCTOR";
            console.log(newState);
            return newState;


        default:
            return state;

    };
}

export default searchDoctorReducer;