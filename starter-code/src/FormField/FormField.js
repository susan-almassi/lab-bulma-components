import React from "react";
import "./FormField.css";

export default function FormField({ label, type, placeholder }) {
  return (
    <div>
      <div className="field form">
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
}
