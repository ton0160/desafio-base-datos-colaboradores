import React from "react";
import Alert from "react-bootstrap/Alert";

function AlertComponent({ msg, color }) {
  return (
    <Alert variant={color} className="m-3">
      {msg}
    </Alert>
  );
}

export default AlertComponent;