import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Topbar from "./components/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/categories/Header";
import Writes from "./pages/Writes";
import SinglePost from "./components/SinglePost";
import Adminregister from "./Admin/Adminregister";
import Adminhome from "./Admin/Adminhome";
import Adminlogin from "./Admin/Adminlogin";
import Userdetails from "./Admin/Userdetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Topbar />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/single/:id" element={<SinglePost />} />
          <Route path="/writes" element={<Writes />} />
          <Route path="/adminregister" element={<Adminregister />} />
          <Route path="/adminhome" element={<Adminhome />} />
          <Route path="/adminlogin" element={<Adminlogin/>} />
          <Route path='/userdetails' element={<Userdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
