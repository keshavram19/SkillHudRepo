import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Auths = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  //   const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = Cookies.get("jwt_token");
    if (token !== undefined) {
      navigate("/");
    }
  }, []);

  const onGetEmail = (event) => {
    setEmail(event.target.value);
  };

  const onGetPassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const url = "http://localhost:4446/auth/login";
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        Cookies.set("jwt_token", data.token);
        // goToHome(data.token)
        navigate("/home");
      } else {
        setShowSubmitError(true);
        setErrorMsg(data.message);
      }
    } catch (error) {
      setShowSubmitError(true);
      setErrorMsg("An error occurred while logging in.");
    }

    setEmail("");
    setPassword("");
  };

  return (
    // <div className="login-container">
    //   <div class="forms-container">
    //     <div class="signin-signup">
    <form className="login-form">
      <div class="logo"></div>
      <div class="title">
        Skill <span>Hub</span>
      </div>
      <div class="fields">
        <div className="username">
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path
              fill="#999"
              d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z"
            ></path>
          </svg>
          <input
            className="form-input"
            type="text"
            value={email}
            onChange={onGetEmail}
            placeholder="email"
            id="email"
            required
          />
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </div>
        <div className="password">
          <svg class="svg-icon" viewBox="0 0 20 20">
            <path
              fill="#999"
              d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"
            ></path>
          </svg>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={onGetPassword}
            placeholder="password"
            id="password"
            required
          />

          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </div>
      </div>

      {/* <input className="button-icons" type="text" onClick={() => setShowPassword(!showPassword)} value={showPassword ? 'Hide Password' : 'Show Password'} /> */}

      <button className="signin-button" type="submit" onClick={onSubmitForm}>
        Login
      </button>
      <div class="link">
        <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
      </div>
    </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Auths;
