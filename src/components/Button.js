import React, { useRef, useEffect, useState } from "react";
import Modal from "./Modal.js";

function Button(props) {
  const [modalPopup, setModalPopup] = useState(false);
  return (
    <div>
      <button
        style={{ color: props.color, animation: props.animate }}
        onClick={() => setModalPopup(true)}
        className="subject-name"
      >
        {props.subject}
      </button>
      <Modal
        colorList={props.colorList}
        animationList={props.animationList}
        courses={props.courseItems}
        selectedSubject={props.subject}
        setTrigger={setModalPopup}
        trigger={modalPopup}
      />
    </div>
  );
}

export default Button;
