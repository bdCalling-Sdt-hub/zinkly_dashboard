import React, { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import Title from "../../../Shared/Title";

const Disclaimer = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 400,
    },
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "16px 0",
        }}
      >
        <div> 
        <Title className="">Disclaimer</Title>
        </div>
        <div></div>
      </div>
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          onChange={(newContent) => {}}
        />
      </div>
      <div
        style={{
          marginTop: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: 44,
            width: 150,
            backgroundColor: "#2461CB",
            color: "white",
            borderRadius: "8px",
            fontWeight: 500,
            fontSize: 14,
          }}
        >
          Save Changes
        </button>
      </div>
    </>
  );
};

export default Disclaimer;
