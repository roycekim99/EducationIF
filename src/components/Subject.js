import React, { useRef, useState } from "react";
import Button from "./Button.js";

const colors = [
  "#DFFF00",
  "#FFBF00",
  "#FF7F50",
  "#DE3163",
  "#9FE2BF",
  "#40E0D0",
  "#6495ED",
  "#CCCCFF",
];

function Subject(props) {
  let subjects = [];

  //find all unique subject names
  for (let courseItem in props.courses) {
    if (!subjects.includes(props.courses[courseItem].subject)) {
      subjects.push(props.courses[courseItem].subject);
    }
  }
  console.log(subjects);

  return (
    <>
      {subjects.map((subjectObj, i) => (
        <div>
          <Button
            key={subjectObj}
            subject={subjectObj}
            color={colors[i % 8]}
            courseItems={props.courses}
          />
        </div>
      ))}
    </>
  );
}

export default Subject;
