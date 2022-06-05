import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3" style={{ color: "#f1aae3" }}>
        {"This Magic Brain will detect faces in your picture. Give it a try."}
      </p>
      <div
        className="input"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "50px",
        }}
      >
        <input
          style={{ borderRadius: "5px", width: "50%", border: "none" }}
          type="text"
          onChange={onInputChange}
        />
        <button
          style={{ borderRadius: "5px", width: "20%", border: "none" }}
          onClick={onButtonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
