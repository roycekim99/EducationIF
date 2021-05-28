import React, { useRef, useEffect, useState } from "react";

function Modal(props) {
  const [timedTopic, setTimedTopic] = useState(true);

  console.log(props);

  //breathing animation
//   useEffect(() => {
//     setTimeout(() => {
//       setTimedTopic(false);
//     }, 4000);
//     setTimeout(() => {
//       setTimedTopic(true);
//     }, 8000);
//   });

  return props.trigger ? (
    <div className="modal">
      <div
        className="bg-image"
        style={{ backgroundImage: "url(/wall-texture.jpg)" }}
      >
        <button className="back-btn" onClick={() => props.setTrigger(false)}>
          Back
        </button>
        {
            
        }
      </div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
