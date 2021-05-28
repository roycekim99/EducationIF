import React, { useRef, useState } from "react";
import Modal from "./Modal.js";

function Subject({ subjectList }) {
  let subjects = [];
  const [modalPopup, setModalPopup] = useState(false);

  //find all unique subject names
  for (var i = 0; i < subjectList.length; i++) {
    if (!subjects.includes(subjectList[i].subject)) {
      subjects.push(subjectList[i].subject);
    }
  }

  return (
    <>
      {subjects.map((subjectObj, i) => (
        <div className="subject-name">
          <Modal
            videos={subjectList}
            selectedSubject={subjectObj}
            trigger={modalPopup}
            setTrigger={setModalPopup}
          />
          <button onClick={() => setModalPopup(true)}>{subjectObj}</button>
        </div>
      ))}
    </>
  );
}

export default Subject;
