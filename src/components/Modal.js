import React, { useRef, useEffect, useState } from "react";
import VideoLists from "./VideoLists.js";

function Modal(props) {
  const [timedTopic, setTimedTopic] = useState(true);
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

        {videoList.map((obj, i) => (
          <VideoLists
            key={obj.id}
            className="topic-name"
            videoTitle={obj.title}
          />
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
