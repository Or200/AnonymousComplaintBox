import React from "react";

export default function ComplaintItem(props) {
  const { _id, category, createdAt, message } = props.info;
  return (
    <tr >
      <td>{category}</td>
      <td>{message}</td>
      <td>{new Date(createdAt).toLocaleDateString()}</td>
    </tr>
  );
}
