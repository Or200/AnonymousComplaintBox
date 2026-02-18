import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ password: "" });
  const adminConsole = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/admin/login",
        login,
      );

      localStorage.setItem("token", res.data.token);
      if (res) {
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Admin login</h1>
      <hr />
      password:{" "}
      <input
        onChange={(e) => setLogin({ password: e.target.value })}
        type="text"
      />
      <button onClick={adminConsole}>Connect</button>
    </div>
  );
}

export default AdminLogin;
