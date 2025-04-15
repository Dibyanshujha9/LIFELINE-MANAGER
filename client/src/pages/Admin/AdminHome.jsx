import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h1 className="mb-3 text-center">
            Welcome, Admin <span className="text-success">{user?.name}</span>
          </h1>
          <h4 className="text-center text-secondary mb-4">
            Blood Bank Management Dashboard
          </h4>
          <hr />
          <p className="lead text-justify">
            As an administrator, you have full control over the Blood Bank
            Management System. Your responsibilities include monitoring donor and
            recipient records, overseeing blood inventory levels, managing hospital
            requests, and ensuring smooth coordination between donation centers and
            healthcare facilities.
          </p>
          <p className="text-justify">
            Use the navigation panel to access and manage different sections such
            as Donor Lists, Blood Requests, Inventory Logs, and Hospital
            Registrations. Real-time data insights and analytics will help you make
            informed decisions to ensure that every drop counts and reaches those in
            need efficiently.
          </p>
          <p className="text-justify">
            Our system is designed to maintain transparency, traceability, and
            accountability at every level. From scheduling donation drives to
            verifying blood compatibility and issuing transfusion reports — every
            action taken here plays a crucial role in saving lives.
          </p>
          <p className="text-muted text-center mt-4">
            "The gift of blood is the gift of life. Administer with care."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
