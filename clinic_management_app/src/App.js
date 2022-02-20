// import 'bootstrap/dist/bootstrap.min.css';
import { Route, Routes } from "react-router";
import './App.css';
import NavBar from './components/Navbar';
import AddDoctor from "./components/AddDoctor";
import EditDoctor from "./components/EditDoctor";
import NoPageFound from "./components/NoPageFound";
import SearchDoctorContainer from "./components/SearchDoctorContainer";
import store from "./store/myStore";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/doctors/search" element={<SearchDoctorContainer />} />
        <Route path="/doctors/add" element={<AddDoctor />} />
        <Route path="/doctors/edit" element={<EditDoctor />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Provider>

  );
};

function Home() {
  return (
    <div>
      <NavBar /><br />
      <h1 style={{ textAlign: "center" }}>WELCOME TO THE CLINIC MANAGEMENT SYSTEM</h1>
    </div>

  )
}

export default App;
