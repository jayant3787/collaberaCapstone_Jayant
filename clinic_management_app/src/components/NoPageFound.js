import { Link } from "react-router-dom";

const NoPageFound = () => {
        return(
            <div style={{color:"red"}}>
            <p>
                Sorry, the page you are looking for doesn't exist!!! .....please contact the "ADMIN"!!!
            </p>
           OR go back to HOME PAGE  <Link to={"/"} >Home</Link>

            </div>
        );
}
export default NoPageFound;