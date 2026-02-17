import React, { useState } from "react";

function Submit() {
  const [mySelect, setMySelect] = useState("")
  const [myText, setMyText] = useState("")
  const sendData = () => {

  }

  return (
    <div>
      <h1>שליחת תלונות אנונמיות</h1>
      <hr />
      <label for="select-complaints">תחום תלונה:</label> <br />
      <select value={this.state.selectValue} onChange={this.handleChange}  className="select-complaints" id="select-complaints">
        <option value="">-- בחר אופציה --</option>
        <option value="food">אוכל</option>
        <option value="equipment">ציוד</option>
        <option value="commands">פקודות</option>
        <option value="other">אחר</option>
      </select> <br />

      <label for="textarea-complaints">תוכן התלונה:</label> <br />
      <textarea onChange={(e) => setMyText(e.target.value) } id="textarea-complaints" className="textarea-complaints" rows="5" cols="33">
        כתוב תוכן....
      </textarea> <br />
      <button onClick={sendData}>שליחה</button>
    </div>
  );
}

export default Submit;
