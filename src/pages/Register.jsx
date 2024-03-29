import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseurl from "../Api";


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    status:"ACTIVE"
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const savedata = (e) => {
    // const validationErrors = validateForm(formData);
    e.preventDefault();
    // if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      axios.post(baseurl+"/register/registernew",formData)
        .then((response) => {
          alert("Record saved");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    // } else {
    //   setErrors(validationErrors);
    // }
  };

  const logindata = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savedata();
  };

  const validateForm = (data) => {
    let errors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate password
    if (!data.password || data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    // Validate confirmPassword
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="registerInput"
          placeholder="Enter your username.."
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>Email</label>
        <input
          type="text"
          name="email"
          className="registerInput"
          placeholder="Enter your email.."
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          className="registerInput"
          placeholder="Enter your password.."
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="registerInput"
          placeholder="Enter confirm password.."
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button className="registerButton" type="submit" onClick={savedata}>
          Register
        </button>

        <button
          className="registerLoginButton"
          type="button"
          onClick={logindata}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
