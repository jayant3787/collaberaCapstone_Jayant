import { put, takeLatest, all } from "redux-saga/effects";
// we need to code generator function for saga like this


// search for a doctor by its speciality
function* searchDoctor(action) {
  console.log("Inside Doctor saga");
  console.log(action);
  const json = yield fetch("http://localhost:8000/doctors/search/speciality/" + action.speciality).then((response) =>

    response.json()
  );
  yield put({ type: "SEARCH_A_DOCTOR_SUCCESSFUL", json: json });
}
function* actionWatcher() {
  yield takeLatest("SEARCH_DOCTORS_WITH_SPECIALITY", searchDoctor);
}


//delete doctor saga
function* deleteDoctor(action) {
  console.log("Inside doctor saga delete");
  console.log(action);
  const json = yield fetch("http://localhost:8000/doctors/delete/" + action.doctorNumber).then((response) =>

    response.json()
  );
  yield put({ type: "DELETE_DOCTOR_RESULTS", json: json });
}
function* actionWatcher2() {
  yield takeLatest("DELETE_DOCTORS_WITH_NUMBER", deleteDoctor);
}





// add a new doctor
function* addNewDoctor(action) {
  var bodyContent = {
    doctorNumber: action.doctor.doctorNumber,
    name: action.doctor.name,
    qualification: action.doctor.qualification,
    speciality: action.doctor.speciality,
  };

  var stringifiedBody = JSON.stringify(bodyContent);

  const serverResponse = yield fetch("http://localhost:8000/doctors/add/", {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json());

  yield put({ type: "ADD_A_DOCTOR_SUCCESSFUL", serverMsg: serverResponse.msg, });
}

function* actionWatcher1() {
  yield takeLatest("ADD_A_DOCTOR_TO_BACKEND", addNewDoctor);
}


function* editDoctor(action) {
  var bodyContent = {
    qualification: action.doctor.qualification,
  };

  var stringifiedBody = JSON.stringify(bodyContent);

  const serverResponse = yield fetch("http://localhost:8000/doctors/edit/"+action.doctor._id, {
    method: "POST",
    body: stringifiedBody,
    headers: {
      "Content-type": "application/json;chartset=UTF-8",
    },
  }).then((res) => res.json());

  yield put({ type: "EDIT_A_DOCTOR_SUCCESSFUL", serverMsg: serverResponse.msg, });
}

function* actionWatcher3() {
  yield takeLatest("EDIT_A_DOCTOR_TO_BACKEND", editDoctor);
}





// for all the above sagas we need to create root saga
export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcher1(),
    actionWatcher2(),
    actionWatcher3()

  ]);
}
