import { Link } from "react-router-dom";
import "./Adtopbar.css";
import IconButton from "@mui/material/IconButton";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";

const Adtopbar = () => {
    
    
    
    

  return (
    <div className="top" style={{ background: "#000000" }}>
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
            style={{ color: "#FFFFFF", marginLeft: "-750px" }}
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "#FFFFFF", marginLeft: "-380px", marginTop: "8px" }}
        >
          BLOG BOOK
        </Typography>
        <li
          className="topListItem"
          style={{ color: "#FFFFFF", marginLeft: "-280px", marginTop: "12px" }}
        >
          <Link className="link" to="/adminhome">
            HOME
          </Link>
        </li>
        <li
          className="topListItem"
          style={{ color: "#FFFFFF", marginRight: "550px" ,marginTop: "12px" }}
        >
            <Link className="link" to="/userdetails">
            USER DETAILS
            </Link>
           
        </li>

        </ul>
        </div>
    
  </div>
  )
}

export default Adtopbar
