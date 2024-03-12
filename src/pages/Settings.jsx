import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Settings.css";
import baseurl from "../Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputs, setInputs] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
  });

  const token = localStorage.getItem("imageid");

  useEffect(() => {
    const storeValue = localStorage.getItem("user");
    axios
      .get(baseurl + "/register/sviewuser/" + storeValue)
      .then((response) => {
        const userData = response.data[0];
        setInputs({
          username: userData.username,
          email: userData.email,
          password: userData.password,
          id: userData._id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleImage = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
    setFile(URL.createObjectURL(selectedFile));
  };

  const deletedata = (id) => {
    console.log("deleted", id);
    axios.put(baseurl + "/register/updatestatus/" + id)
    .then((response) => {
      alert("Deleted");
    });
  }
  const saveData = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", inputs.username);
    formData.append("email", inputs.email);
    formData.append("password", inputs.password);

    if (selectedImage) {
      formData.append("profilephoto", selectedImage);
    }

    axios
      .put(`${baseurl}/update/user/${inputs.id}`, formData)
      .then((response) => {
        alert("User Profile Updated");
        localStorage.setItem("imageid", response.data.data._id);
        navigate('/homepage')
      })
      .catch((error) => {
        console.log(error);
      }); 
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          
        </div>
        <form className="settingsForm" >
          <label>Profile Picture</label>
          <div className="settingsPP">
            {file && <img className="writeImg" src={file} alt="" />}
            {token && (
              <img
                src={`${baseurl}/public/images/${token}.jpg`}
                alt="User profile"
              />
            )}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={handleImage}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={inputHandler}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={inputHandler}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={inputHandler}
          />
          <button className="settingsSubmitButton" onClick={saveData}>
            Update Account
          </button>
          <button className="settingsSubmitButton"  onClick={() => deletedata(inputs.id)} >
           Delete Account
          </button>
        </form>
       
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
