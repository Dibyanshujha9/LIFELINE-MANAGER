
import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import FloatingNeededButton from "./Floating";


const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        
        <div className="row g-0">
                    <Navbar />
          <div className="col-md-5 form-banner">
            <img src="./assets/images/banner1.png" alt="loginImage"  style={{ Height: '700px' , marginTop: '50px' }} />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Login;