import { put, takeLatest, all } from "redux-saga/effects";
// we need to code generator function for saga like this

function* searchDoctor(action) {
    console.log("Inside Doctor saga");
    console.log(action);
    const json = yield fetch("http://localhost:8000/doctors/search/speciality/"+action.speciality).then((response) =>

      response.json()
    );
    yield put({ type: "SEARCH_A_DOCTOR_SUCCESSFUL", json: json });
  }
  function* actionWatcher() {
    yield takeLatest("SEARCH_DOCTORS_WITH_SPECIALITY", searchDoctor);
  }


  
  // for all the above sagas we need to create root saga
  export default function* rootSaga() {
    yield all([
      actionWatcher()
    ]);
  }
  