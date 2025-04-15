// import React from "react";
// import Form from "../../components/shared/Form/Form";

// const Register = () => {
//   return (
//     <>
//       <div className="row g-0">
//         <div className="col-md-7 form-banner">
//           <img src="./assets/images/banner1.jpg" alt="loginImage" />
//         </div>
//         <div className="col-md-3 form-container">
//           <div className="d-flex flex-column">
//            <Form formTitle={"Register Portal"} submitBtn={"Register"} formType={"register"}/>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;
import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
                              <Navbar />
          <div className="col-md-5 form-banner ">
          <img src="./assets/images/banner1.png" alt="loginImage"  style={{ Height: '700px' , marginTop: '50px' }} />
          </div>
          <div className="col-md-4 form-container" style={{ marginTop: '25px' }}>
          <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Register;