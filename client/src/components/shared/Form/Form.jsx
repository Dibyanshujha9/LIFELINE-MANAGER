// import React, { useState } from 'react'
// import InputType from './InputType'





// const Form = ({formType , submitBtn , formTitle}) => {
//   // here i am handling the state 
// const [email , setEmail] = useState("");
// const [password , setPassword] = useState("");
// const [role, setRole] = useState("donar");
// const [name, setName] = useState("");
// const [organisationName, setOrganisationName] = useState("");
// const [hospitalName, setHospitalName] = useState("");
// const [website, setWebsite] = useState("");
// const [address, setAddress] = useState("");
// const [phone, setPhone] = useState("");




//   return (
// <div>
//   {/* Now Creating a form  */}
//   <form>
//     <h1 className='text-center'>{formTitle}</h1>
//     <hr /> {/* This is used for a line   */}



// {/* RADIO BUTTON FUNCTIONALITY  */}
//     <div className="d-flex mb-3">
//           <div className="form-check">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="donarRadio"
//               value={"donar"}
//               onChange={(e) => setRole(e.target.value)}
//               defaultChecked
//             />
//             <label htmlFor="adminRadio" className="form-check-label">
//               Donar
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="adminRadio"
//               value={"admin"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="adminRadio" className="form-check-label">
//               Admin
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="hospitalRadio"
//               value={"hospital"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="hospitalRadio" className="form-check-label">
//               Hospital
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="organisationRadio"
//               value={"organisation"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="organisationRadio" className="form-check-label">
//               Organisation
//             </label>
//           </div>
//         </div>





// {/* Switch statement {()()}  */}
// {(() =>{
//   switch(true){
// case formType === 'login':{
//  return (
//   <>
//   {/* For EMAIL Only  */}
//   <InputType 
//   // Inputs from the InputType.jsx
//   labelText={"Email"}
//   labelFor={"forEmail"}
//   inputType={"email"}
//   name={"email"}
//   value={email}
//   // It listens for changes in the input value and calls a function when the value changes.
//   onChange={(e)=> setEmail(e.target.value)}
//   />

//   {/* For Passwprd only  */}
//   <InputType 
//   // Inputs from the InputType.jsx
//   labelText={"Password"}
//   labelFor={"forPassword"}
//   inputType={"password"}
//   name={"password"}
//   value={password}
//   // It listens for changes in the input value and calls a function when the value changes.
//   onChange={(e)=> setPassword(e.target.value)}
//   />

// </>
//  );
// }

// case formType === 'register':{
//  return (
//   <>
  
//  <InputType 
//       // Inputs from the InputType.jsx
//       labelText={"Role"}
//       labelFor={"forRole"}
//       inputType={"role"}
//       name={"role"}
//       value={role}
//       // It listens for changes in the input value and calls a function when the value changes.
//       onChange={(e)=> setRole(e.target.value)}
//       />

//   {(role === "admin" || role === "donar") && (
//   <InputType 
//   // Inputs from the InputType.jsx
//   labelText={"Name"}
//   labelFor={"forName"}
//   inputType={"name"}
//   name={"name"}
//   value={name}
//   // It listens for changes in the input value and calls a function when the value changes.
//   onChange={(e)=> setName(e.target.value)}
//   />
//   )}
  
// {role === 'organisation' && (
//     <InputType 
//     // Inputs from the InputType.jsx
//     labelText={"Organisation Name"}
//     labelFor={"forOrganisationName"}
//     inputType={"organisationName"}
//     name={"organisationName"}
//     value={organisationName}
//     // It listens for changes in the input value and calls a function when the value changes.
//     onChange={(e)=> setOrganisationName(e.target.value)}
//     />
// )}
  
// {role === 'hospital' && (
//   <InputType 
//       // Inputs from the InputType.jsx
//       labelText={"Hospital Name"}
//       labelFor={"forHospitalName"}
//       inputType={"hospitalName"}
//       name={"hospitalName"}
//       value={hospitalName}
//       // It listens for changes in the input value and calls a function when the value changes.
//       onChange={(e)=> setHospitalName(e.target.value)}
//       />
// )}
  
//    {/* For EMAIL Only  */}
//    <InputType 
//   // Inputs from the InputType.jsx
//   labelText={"Email"}
//   labelFor={"forEmail"}
//   inputType={"email"}
//   name={"email"}
//   value={email}
//   // It listens for changes in the input value and calls a function when the value changes.
//   onChange={(e)=> setEmail(e.target.value)}
//   />

//   {/* For Passwprd only  */}
//   <InputType 
//   // Inputs from the InputType.jsx
//   labelText={"Password"}
//   labelFor={"forPassword"}
//   inputType={"password"}
//   name={"password"}
//   value={password}
//   // It listens for changes in the input value and calls a function when the value changes.
//   onChange={(e)=> setPassword(e.target.value)}
//   />


//   <InputType 
//       // Inputs from the InputType.jsx
//       labelText={"Website"}
//       labelFor={"forWebsite"}
//       inputType={"website"}
//       name={"website"}
//       value={website}
//       // It listens for changes in the input value and calls a function when the value changes.
//       onChange={(e)=> setWebsite(e.target.value)}
//       />
  

//   <InputType 
//       // Inputs from the InputType.jsx
//       labelText={"Address"}
//       labelFor={"forAddress"}
//       inputType={"address"}
//       name={"address"}
//       value={address}
//       // It listens for changes in the input value and calls a function when the value changes.
//       onChange={(e)=> setAddress(e.target.value)}
//       />
  
  
//   <InputType 
//       // Inputs from the InputType.jsx
//       labelText={"Phone"}
//       labelFor={"forPhone"}
//       inputType={"phone"}
//       name={"phone"}
//       value={phone}
//       // It listens for changes in the input value and calls a function when the value changes.
//       onChange={(e)=> setPhone(e.target.value)}
//       />
//     </>
//  );
// }
//   }
// })()}





// {/* SUBMIT BUTTON  */}
// <button type="submit" className="btn btn-primary mt-0">
//               {submitBtn}
//             </button>

//   </form>
// </div>
//   )
// }

// export default Form



// import React, { useState } from 'react';
// import InputType from './InputType';
// import { Link } from 'react-router-dom';
// import { handleLogin, handleRegister } from '../../../services/authService';

// const Form = ({ formType, submitBtn, formTitle }) => {
//   // State management - consolidated for better readability
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "donar",
//     name: "",
//     organisationName: "",
//     hospitalName: "",
//     website: "",
//     address: "",
//     phone: ""
//   });

//   // Handler for all input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Form submission handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { email, password, role, name, organisationName, hospitalName, website, address, phone } = formData;
    
//     if (formType === 'login') {
//       return handleLogin(e, email, password, role);
//     } else if (formType === 'register') {
//       return handleRegister(
//         e, 
//         name, 
//         role, 
//         email, 
//         password, 
//         organisationName, 
//         hospitalName, 
//         website, 
//         address, 
//         phone
//       );
//     }
//   };

//   return (
//     <div className="container">
//       {/* Form container with responsive padding - increased max-width */}
//       <div className="card shadow-sm border-0 mx-auto my-3" style={{ maxWidth: '800px' }}>
//         <div className="card-body p-4">
//           <form onSubmit={handleSubmit}> 
//             {/* Form header */}
//             <h3 className="text-center mb-3">{formTitle}</h3>
//             <hr className="mb-4" /> {/* This is used for a line */}

//             {/* RADIO BUTTON FUNCTIONALITY */}
//             <div className="d-flex mb-4 justify-content-center">
//               <div className="form-check me-4">
//                 <input
//                   type="radio"
//                   className="form-check-input"
//                   name="role"
//                   id="donarRadio"
//                   value="donar"
//                   onChange={handleChange}
//                   checked={formData.role === "donar"}
//                 />
//                 <label htmlFor="donarRadio" className="form-check-label">
//                   donar
//                 </label>
//               </div>
//               <div className="form-check me-4">
//                 <input
//                   type="radio"
//                   className="form-check-input"
//                   name="role"
//                   id="adminRadio"
//                   value="admin"
//                   onChange={handleChange}
//                   checked={formData.role === "admin"}
//                 />
//                 <label htmlFor="adminRadio" className="form-check-label">
//                   admin
//                 </label>
//               </div>
//               <div className="form-check me-4">
//                 <input
//                   type="radio"
//                   className="form-check-input"
//                   name="role"
//                   id="hospitalRadio"
//                   value="hospital"
//                   onChange={handleChange}
//                   checked={formData.role === "hospital"}
//                 />
//                 <label htmlFor="hospitalRadio" className="form-check-label">
//                   hospital
//                 </label>
//               </div>
//               <div className="form-check">
//                 <input
//                   type="radio"
//                   className="form-check-input"
//                   name="role"
//                   id="organisationRadio"
//                   value="organisation"
//                   onChange={handleChange}
//                   checked={formData.role === "organisation"}
//                 />
//                 <label htmlFor="organisationRadio" className="form-check-label">
//                   organisation
//                 </label>
//               </div>
//             </div>

//             {/* Switch statement {()()} */}
//             {(() => {
//               switch (true) {
//                 case formType === 'login': {
//                   return (
//                     <div className="row g-3">
//                       <div className="col-12">
//                         {/* For EMAIL Only */}
//                         <InputType
//                           labelText={"email"}
//                           labelFor={"forEmail"}
//                           inputType={"email"}
//                           name={"email"}
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </div>
//                       <div className="col-12">
//                         {/* For Password only */}
//                         <InputType
//                           labelText={"Password"}
//                           labelFor={"forPassword"}
//                           inputType={"password"}
//                           name={"password"}
//                           value={formData.password}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                   );
//                 }

//                 case formType === 'register': {
//                   return (
//                     <div className="row g-3">
//                       {(formData.role === "admin" || formData.role === "donar") && (
//                         <div className="col-12">
//                           <InputType
//                             labelText={"name"}
//                             labelFor={"forName"}
//                             inputType={"text"}
//                             name={"name"}
//                             value={formData.name}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       )}

//                       {formData.role === 'organisation' && (
//                         <div className="col-12">
//                           <InputType
//                             labelText={"organisation name"}
//                             labelFor={"forOrganisationName"}
//                             inputType={"text"}
//                             name={"organisationName"}
//                             value={formData.organisationName}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       )}

//                       {formData.role === 'hospital' && (
//                         <div className="col-12">
//                           <InputType
//                             labelText={"hospital name"}
//                             labelFor={"forHospitalName"}
//                             inputType={"text"}
//                             name={"hospitalName"}
//                             value={formData.hospitalName}
//                             onChange={handleChange}
//                           />
//                         </div>
//                       )}

//                       <div className="col-md-6">
//                         {/* For EMAIL Only */}
//                         <InputType
//                           labelText={"email"}
//                           labelFor={"forEmail"}
//                           inputType={"email"}
//                           name={"email"}
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div className="col-md-6">
//                         {/* For Password only */}
//                         <InputType
//                           labelText={"password"}
//                           labelFor={"forPassword"}
//                           inputType={"password"}
//                           name={"password"}
//                           value={formData.password}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div className="col-md-6">
//                         <InputType
//                           labelText={"website"}
//                           labelFor={"forWebsite"}
//                           inputType={"url"}
//                           name={"website"}
//                           value={formData.website}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div className="col-md-6">
//                         <InputType
//                           labelText={"phone"}
//                           labelFor={"forPhone"}
//                           inputType={"tel"}
//                           name={"phone"}
//                           value={formData.phone}
//                           onChange={handleChange}
//                         />
//                       </div>

//                       <div className="col-12">
//                         <InputType
//                           labelText={"address"}
//                           labelFor={"forAddress"}
//                           inputType={"text"}
//                           name={"address"}
//                           value={formData.address}
//                           onChange={handleChange}
//                         />
//                       </div>
//                     </div>
//                   );
//                 }
//                 default:
//                   return null;
//               }
//             })()}

//             {/* SUBMIT BUTTON */}
//             <div className="d-grid mt-4">
//               {formType === 'login' ? (
//                 <p className="text-center mb-3">
//                   Not registered yet? Register <Link to="/register">Here!</Link>
//                 </p>
//               ) : (
//                 <p className="text-center mb-3">
//                   Already a User? Please <Link to="/login">Login</Link>
//                 </p>
//               )}
//               <button type="submit" className="btn btn-primary">
//                 {submitBtn}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from 'react';
import InputType from './InputType';
import { Link } from 'react-router-dom';
import { handleLogin, handleRegister } from '../../../services/authService';
import FloatingNeededButton from '../../../pages/auth/Floating';

const Form = ({ formType, submitBtn, formTitle }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "donar",
    name: "",
    organisationName: "",
    hospitalName: "",
    website: "",
    address: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      password,
      role,
      name,
      organisationName,
      hospitalName,
      website,
      address,
      phone
    } = formData;

    if (formType === 'login') {
      // ✅ Ensure role is passed properly
      return handleLogin(e, email, password, role);
    } else if (formType === 'register') {
      return handleRegister(
        e,
        name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone
      );
    }
  };

  return (
    <div className="container">
      <div className="card shadow-sm border-0 mx-auto my-3" style={{ maxWidth: '800px' }}>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center mb-3">{formTitle}</h3>
            <hr className="mb-4" />

            {/* ✅ Always show role radio buttons */}
            <div className="d-flex mb-4 justify-content-center">
              {/* {['donar', 'admin', 'hospital', 'organisation'].map((r) => ( */}
              {['donar' , 'hospital', 'organisation'].map((r) => (
                <div key={r} className="form-check me-4">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="role"
                    id={`${r}Radio`}
                    value={r}
                    onChange={handleChange}
                    checked={formData.role === r}
                  />
                  <label htmlFor={`${r}Radio`} className="form-check-label">
                    {r}
                  </label>
                </div>
              ))}
              <FloatingNeededButton />
            </div>

            {/* Dynamic form fields */}
            {(() => {
              switch (formType) {
                case 'login':
                  return (
                    <div className="row g-3">
                      <div className="col-12">
                        <InputType
                          labelText="email"
                          labelFor="forEmail"
                          inputType="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-12">
                        <InputType
                          labelText="password"
                          labelFor="forPassword"
                          inputType="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  );

                case 'register':
                  return (
                    <div className="row g-3">
                      {(formData.role === "admin" || formData.role === "donar") && (
                        <div className="col-12">
                          <InputType
                            labelText="name"
                            labelFor="forName"
                            inputType="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      )}

                      {formData.role === 'organisation' && (
                        <div className="col-12">
                          <InputType
                            labelText="organisation name"
                            labelFor="forOrganisationName"
                            inputType="text"
                            name="organisationName"
                            value={formData.organisationName}
                            onChange={handleChange}
                          />
                        </div>
                      )}

                      {formData.role === 'hospital' && (
                        <div className="col-12">
                          <InputType
                            labelText="hospital name"
                            labelFor="forHospitalName"
                            inputType="text"
                            name="hospitalName"
                            value={formData.hospitalName}
                            onChange={handleChange}
                          />
                        </div>
                      )}

                      <div className="col-md-6">
                        <InputType
                          labelText="email"
                          labelFor="forEmail"
                          inputType="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <InputType
                          labelText="password"
                          labelFor="forPassword"
                          inputType="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <InputType
                          labelText="website"
                          labelFor="forWebsite"
                          inputType="url"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <InputType
                          labelText="phone"
                          labelFor="forPhone"
                          inputType="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-12">
                        <InputType
                          labelText="address"
                          labelFor="forAddress"
                          inputType="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  );

                default:
                  return null;
              }
            })()}

            {/* Submit button */}
            <div className="d-grid mt-4">
              {formType === 'login' ? (
                <p className="text-center mb-3">
                  Not registered yet? Register <Link to="/register">Here!</Link>
                </p>
              ) : (
                <p className="text-center mb-3">
                  Already a User? Please <Link to="/login">Login</Link>
                </p>
              )}
              <button type="submit" className="btn btn-primary">
                {submitBtn}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
