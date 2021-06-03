import React, { useRef, useState } from "react";
import Button from "./Button.js";

const colors = ["#FF3D00", "#FFBA09", "#00FF62", "#12F3F3", "#18BAFF"];
const animationNames = [
  "fluxOrange 2s linear infinite",
  "fluxYellow 2s linear infinite",
  "fluxGreen 2s linear infinite",
  "fluxLBlue 2s linear infinite",
  "fluxBlue 2s linear infinite",
];

function Subject(props) {
  let subjects = [];

  //find all unique subject names
  for (let courseItem in props.courses) {
    if (!subjects.includes(props.courses[courseItem].subject)) {
      subjects.push(props.courses[courseItem].subject);
    }
  }

  const school = props.school;

  return (
    <>
      {subjects.map((subjectObj, i) => (
        <div key={subjectObj}>
          <Button
            animationList={animationNames}
            colorList={colors}
            animate={animationNames[i % animationNames.length]}
            subject={subjectObj}
            color={colors[i % colors.length]}
            courseItems={props.courses}
            school={school}
          />
        </div>
      ))}
    </>
  );
}

export default Subject;
