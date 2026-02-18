import React from "react";
import { data } from "react-router-dom";
import axios from "axios";

function AdminConsole() {
  const getData = async () => {
    const data = await axios.get("http://localhost:3000/api/complaints", {
      headers: {
        "Authorization": localStorage.getItem("token")
      },
    });
    console.log(data.data);
    return data
  };

  return <div>
    <button onClick={getData}>click</button>
  </div>;
}

export default AdminConsole;
