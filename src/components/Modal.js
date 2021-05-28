import React, { useRef, useEffect, useState } from "react";

function Modal(props) {
  //const [timedTopic, setTimedTopic] = useState(true);

  //breathing animation
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedTopic(false);
  //   }, 4000);
  //   setTimeout(() => {
  //     setTimedTopic(true);
  //   }, 8000);
  // });

  const videoList = props.courses.filter((subjectObj) => {
    return subjectObj.subject == props.selectedSubject;
  });

  return props.trigger ? (
    <div className="modal">
      <div
        className="bg-image modal-content"
        style={{ backgroundImage: "url(/wall-texture.jpg)" }}
      >
        <button className="back-btn" onClick={() => props.setTrigger(false)}>
          Back
        </button>

        {videoList.map((obj) => (
          <div>{obj.title}</div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
