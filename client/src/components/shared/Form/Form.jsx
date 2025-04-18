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