import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeTable = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="text-danger fw-bold">LEARN ABOUT DONATION</h2>
        <p className="text-muted">One Blood Donation can save up to <span className="text-danger fw-bold">Three Lives</span></p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png" 
            alt="Blood Bag"
            className="img-fluid"
            style={{ maxWidth: "250px" }}
          />
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Donors"
            className="img-fluid"
            style={{ maxHeight: "150px" }}
          />
          <p className="mt-3 text-muted">
            After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn,
            helps in maintaining good health.
          </p>
          {/* <button className="btn btn-danger mt-2">
            <i className="bi bi-droplet-fill"></i> Donate Now
          </button> */}
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-center text-danger fw-bold mb-3">Compatible Blood Type Donors</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-striped text-center align-middle">
            <thead className="table-danger">
              <tr>
                <th>Blood Type</th>
                <th>Donate Blood To</th>
                <th>Receive Blood From</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><b>A+</b></td><td>A+ AB+</td><td>A+ A- O+ O-</td></tr>
              <tr><td><b>O+</b></td><td>O+ A+ B+ AB+</td><td>O+ O-</td></tr>
              <tr><td><b>B+</b></td><td>B+ AB+</td><td>B+ B- O+ O-</td></tr>
              <tr><td><b>AB+</b></td><td>AB+</td><td>Everyone</td></tr>
              <tr><td><b>A-</b></td><td>A+ A- AB+ AB-</td><td>A- O-</td></tr>
              <tr><td><b>O-</b></td><td>Everyone</td><td>O-</td></tr>
              <tr><td><b>B-</b></td><td>B+ B- AB+ AB-</td><td>B- O-</td></tr>
              <tr><td><b>AB-</b></td><td>AB+ AB-</td><td>AB- A- B- O-</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeTable;