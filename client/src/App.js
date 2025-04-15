import {Routes , Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import Organisation from "./pages/Dashboard/OrganisationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import HospitalList from "./pages/Admin/HospitalList";
import DonarList from "./pages/Admin/DonarList";
import OrgList from "./pages/Admin/OrgList";
import AdminHome from "./pages/Admin/AdminHome";
import NeededPerson from "./components/NeededPerson/NeededPerson";
import FloatingNeededButton from "./pages/auth/Floating";


function App() {
  return (
    <>
        <ToastContainer />
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage/>
        </ProtectedRoute>
        } />
         <Route path="/donar" element={
        <ProtectedRoute>
          <Donar/>
        </ProtectedRoute>
        } />
         <Route path="/hospital" element={
        <ProtectedRoute>
          <Hospitals/>
        </ProtectedRoute>
        } />
              <Route path="/orgnaisation" element={
        <ProtectedRoute>
          <Organisation/>
        </ProtectedRoute>
        } />
         <Route path="/consumer" element={
        <ProtectedRoute>
          <Consumer/>
        </ProtectedRoute>
        } />
         <Route path="/donation" element={
        <ProtectedRoute>
          <Donation/>
        </ProtectedRoute>
        } />
        <Route path="/analytics" element={
        <ProtectedRoute>
          <Analytics/>
        </ProtectedRoute>
        } />
        <Route path="/hospital-list" element={
        <ProtectedRoute>
          <HospitalList/>
        </ProtectedRoute>
        } />
          <Route path="/donar-list" element={
        <ProtectedRoute>
          <DonarList/>
        </ProtectedRoute>
        } />
          <Route path="/org-list" element={
        <ProtectedRoute>
          <OrgList/>
        </ProtectedRoute>
        } />
        <Route path="/admin" element={
        <ProtectedRoute>
          <AdminHome/>
        </ProtectedRoute>
        } />
        <Route path="/neededperson" element={
        <PublicRoute>
          <NeededPerson/>
        </PublicRoute>
      } />
       <Route path="/floating" element={
        <PublicRoute>
          <FloatingNeededButton/>
        </PublicRoute>
      } />
      <Route path="/login" element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      <Route path="/register" element={
        <PublicRoute>
          <Register/>
        </PublicRoute>
      } />
    </Routes>
    </>


  );
}

export default App;
