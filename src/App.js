import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auths from "./components/Login/Login";
import Home from "./components/Home/home";
import Users from "./components/users/Users";
import Institutions from "./components/Institutions/Institutions";
import Dashboard from "./components/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import Pricing from "./components/Profile/Pricing/Pricing";
import Billing from "./components/Profile/Billing/Billing";
import Password from "./components/Profile/Password/Password";
import ComplierTest from "./components/Profile/Complier/ComplierTest";
import Invoice from "./components/Profile/invoice/Invoice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Auths />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/Users" element={<Users />} />
          <Route exact path="/Institutions" element={<Institutions />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/Pricing" element={<Pricing />} />
          <Route exact path="/Billing" element={<Billing />} />
          <Route exact path="/Password" element={<Password />} />
          <Route exact path="/Complier" element={<ComplierTest />} />
          <Route exact path="/Invoice" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
