import logo from "./icons/dog-api-logo.svg";
import "./App.css";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", margin: "0" }}>
      <div className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </div>
      <div className="App">
        {/* <Router> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/breeds/:breed" element={<SelectBreed />} /> */}
        </Routes>
        {/* </Router> */}
      </div>
    </Container>
  );
}

export default App;
