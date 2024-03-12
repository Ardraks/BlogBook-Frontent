import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import Register from "../pages/Register";
import baseurl from "../Api";
import { Token } from "@mui/icons-material";

const Userdetails = () => {
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);
  var [users, setUsers] = useState([]);

  const PF = "http://localhost:4005/images/";

  useEffect(() => {
    axios
      .get(baseurl + "/register/registerview")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteValues = (id) => {
    console.log("deleted", id);
    axios.put(baseurl + "/register/updatestatus/" + id).then((response) => {
      alert("InActivated");
      //to reload window
      window.location.reload(false);
    });
  };

  const activate = (id) => {
    axios.put(baseurl + "/register/activeuserstatus/" + id).then((response) => {
      alert("Activated");
      //to reload window
      window.location.reload(false);
    });
  };

  var result = (
    <div>
      <Typography variant="h5">Userdetails</Typography>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Profilephoto</TableCell> 
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
             <TableCell>Status</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                  <img
              className="topImg"
              src={`${baseurl}/public/images/${value._id}.jpg`}
             
              alt=""
            />
                  </TableCell>
                  <TableCell>{value.username}</TableCell>
                  <TableCell>{value.email}</TableCell>
                  <TableCell>{value.password}</TableCell>
                  <TableCell>{value.status}</TableCell>
                  <TableCell>
                    {value.status === "INACTIVE" ? (
                      <Button
                        color="success"
                        onClick={() => activate(value._id)}
                      >
                        Activate
                      </Button>
                    ) : (
                      <Button
                        color="error"
                        onClick={() => deleteValues(value._id)}
                      >
                        InActivate
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  if (update) result = <Register data={selected} method="put" />;
  return result;
};
export default Userdetails;
