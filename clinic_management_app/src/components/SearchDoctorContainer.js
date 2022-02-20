import SearchDoctor from './SearchDoctor';
import { connect } from 'react-redux';

// state is nothing but store that we are passing in the parameter
const mapStateToProps = (store) => {
    return {
        doctorData: store.reducer1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchDoctor: (specialityVal) => dispatch({ type: "SEARCH_DOCTORS_WITH_SPECIALITY", speciality: specialityVal })

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchDoctor);