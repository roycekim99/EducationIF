import React, { useRef, useEffect, useState } from "react";
import VideoItem from "./VideoItem.js";

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
        <div className='back-btn-container'>
          <button className="back-btn" onClick={() => props.setTrigger(false)}>
          <i className="left-arrow"></i>
            Back
          </button>
        </div>

        {videoList.map((obj, i) => (
          <VideoItem
            key={obj.id}
            videoTitle={obj.title}
            color={props.colorList[i % props.colorList.length]}
            animation={props.animationList[i % props.animationList.length]}
            videoURL={obj.url}
          />
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
