import React, { useState } from "react";
import axios from "axios";

function Submit() {
  const [sendComplaint, setSendComplaint] = useState({
    category: "default",
    message: "",
  });
  const [messageStatus, setrMessageStatus] = useState({ type: "", msg: "" });

  const handleSubmit = async () => {
    try {
   const res = await axios.post(
        "http://localhost:3000/api/complaints",
        sendComplaint,
      );
      setrMessageStatus({ type: "success", msg: "Send" });
      setSendComplaint({
        category: "default",
        message: "",
    });
    } catch (err) {
      console.log("error: ", err);  
      setrMessageStatus({ type: "error", msg: "Error" });
    }
  };

  return (
    <div>
      <h1>שליחת תלונות אנונמיות</h1>
      <hr />
      <label for="select-complaints">תחום תלונה:</label> <br />
      <select
        onChange={(e) =>
          setSendComplaint({ ...sendComplaint, category: e.target.value })
        }
        className="select-complaints"
        id="select-complaints"
      >
        <option value="default">-- בחר אופציה --</option>
        <option value="food">אוכל</option>
        <option value="equipment">ציוד</option>
        <option value="commands">פקודות</option>
        <option value="other">אחר</option>
      </select>{" "}
      <br />
      <label for="textarea-complaints">תוכן התלונה:</label> <br />
      <textarea
        onChange={(e) =>
          setSendComplaint({ ...sendComplaint, message: e.target.value })
        }
        id="textarea-complaints"
        className="textarea-complaints"
        rows="5"
        cols="33"
        placeholder="כתוב תוכן...."
      >
      </textarea>{" "}
      <br />
      <button onClick={handleSubmit}>שליחה</button>
      {messageStatus.msg && <p className="">{messageStatus.msg}</p>}
    </div>
  );
}

export default Submit;
