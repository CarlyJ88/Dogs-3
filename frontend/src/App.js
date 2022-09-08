import logo from "./icons/dog-api-logo.svg";
import "./App.css";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", margin: "0" }}>
      <div className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
