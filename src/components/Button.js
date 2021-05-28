import React, { useRef, useEffect, useState } from "react";
import Modal from "./Modal.js";

function Button(props) {
  const [modalPopup, setModalPopup] = useState(false);

  return (
    <div>
      <button
        style={{ color: props.color }}
        onClick={() => setModalPopup(true)}
      >
        {props.subject}
      </button>
      <Modal
        trigger={modalPopup}
        courses={props.courseItems}
        selectedSubject={props.subject}
        setTrigger={setModalPopup}
      />
    </div>
  );
}

export default Button;
