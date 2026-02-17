import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const submitComplaint = () => {
    navigate("submit");
  };

  const adminLogin = () => {
    navigate("admin/login");
  };

  return (
    <div>
      <div>
        <h1>תיבת תלונות</h1>
        <hr />
        <p>שלחו בצורה אנונימית</p>
        <button onClick={submitComplaint}>שליחת תלונה</button>
      </div>
      <br /> <br />
      <div>
        <h1>כניסת מנהלים</h1>
        <hr />
        <button onClick={adminLogin}>כניסה</button>
      </div>
    </div>
  );
}

export default HomePage;
