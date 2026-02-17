import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Submit from "./pages/Submit";
import AdminLogin from "./pages/AdminLogin";
import AdminConsole from "./pages/AdminConsole";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminConsole />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
