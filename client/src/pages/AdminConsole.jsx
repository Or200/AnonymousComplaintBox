import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/AdminConsole.css";
import ComplaintItem from "../components/ComplaintItem";

function AdminConsole() {
  const [complaintsFilter, setComplaintsFilter] = useState("all");
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3000/api/complaints", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setComplaints(data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setComplaintsFilter(e.target.value)}/>
      <div className="filtredBox">
        <label>Filter by Category: </label>
        <select onChange={(e) => setComplaintsFilter(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="food">Food</option>
          <option value="equipment">Equipment</option>
          <option value="orders">Orders</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>תחום</th>
              <th>תוכן תלונה</th>
              <th>תאריך</th>
            </tr>
          </thead>
          <tbody>
            {/* c => c.category.toLowerCase().includes(complaintsFilter.toLowerCase()) */}
            {complaints.filter(c => c.category === complaintsFilter || complaintsFilter === "all").map((c) => {
              return <ComplaintItem key={c._id} info={c} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminConsole;
