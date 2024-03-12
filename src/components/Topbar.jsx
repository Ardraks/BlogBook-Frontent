import { Link, useNavigate } from "react-router-dom";
import "./Topbar.css";
import IconButton from "@mui/material/IconButton";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import baseurl from "../Api";

export default function Topbar(props) {
  
  const navigate = useNavigate();
  const token = localStorage.getItem("imageid");
  const savedata = () => {
    const storevalue =localStorage.getItem("log");
    if (storevalue==="1")
    {
      localStorage.removeItem("log");
      localStorage.removeItem("imageid");
      localStorage.removeItem("user")
    console.log("clicked");
    navigate("/login");
    }
  };

  

  return (
    <div className="top" style={{ background: "#000000", marginTop: "-20px" }}>
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="topList">
          <IconButton
            size="large"
            edge="start"
            color="#FFFFFF"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AutoStoriesIcon
              style={{ color: "#FFFFFF", marginLeft: "-550px" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#FFFFFF", marginLeft: "-280px", marginTop: "8px" }}
          >
            BLOG BOOK
          </Typography>
          <li
            className="topListItem"
            style={{ color: "#FFFFFF", marginLeft: "-280px", marginTop: "8px" }}
          >
            <Link className="link" to="/homepage">
              HOME
            </Link>
          </li>
          <li
            className="topListItem"
            style={{ color: "#FFFFFF", marginTop: "8px" }}
          >
            ABOUT
          </li>

          
          <li
            className="topListItem"
            style={{ color: "#FFFFFF", marginTop: "8px" }}
          >
            <Link className="link" to="/Writes">
              WRITE
            </Link>
          </li>
         
            <li
              className="topListItem"
              style={{ color: "#FFFFFF", marginTop: "8px" }}
              onClick={savedata}
            >
              {" "}
              LOGOUT
            </li>
        
        </ul>
      </div>
      <div className="topRight">
        
          <Link className="link" to="/Settings">
            <img
              className="topImg"
              src={`${baseurl}/public/images/${token}.jpg`}
             
              alt=""
            />
          </Link>       
      </div>
    </div>
  );
}
