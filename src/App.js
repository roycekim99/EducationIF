import React, { useRef, useEffect } from "react";
import "./App.css";
import "./fonts/NightLight-Font.otf";
import NeonSignHome from "./components/NeonSignHome.js";
import Subject from "./components/Subject.js";

/* App */
function App() {
  const courseList = [
    {
      id: 1,
      subject: "Biology ",
      title: "Human Behavioral Biology",
      url: "https://www.youtube.com/watch?v=oKNAzl-XN4I&t=5511s",
      thumbnail_url: "https://img.youtube.com/vi/oKNAzl-XN4I/1.jpg",
      school: "Stanford",
      prof: "Robert Sapolsky",
    },
    {
      id: 2,
      subject: "Biology ",
      title: "Enzymes and metabolism",
      url: "https://youtu.be/QTdJiG7mV40?t=542",
      thumbnail_url: "http://i3.ytimg.com/vi/QTdJiG7mV40?t=542/hqdefault.jpg",
      school: "MIT",
      prof: "Barbara Imperiali",
    },
    {
      id: 3,
      subject: "Biology ",
      title: "DNA Replication",
      url: "https://youtu.be/DRBREvFL19g?t=737",
      thumbnail_url:
        "https://i.ytimg.com/an_webp/DRBREvFL19g/mqdefault_6s.webp?du=3000&sqp=CNjxs4UG&rs=AOn4CLCiAazoQFH2nx9gtrQPmxt2v69Rdg",
      school: "MIT",
      prof: "Eric Lander",
    },
    {
      id: 4,
      subject: "Biology ",
      title: "Introductory Biology",
      url: "https://youtu.be/KlVHqq38KJU?t=600",
      thumbnail_url:
        "https://www.youtube.com/watch?v=KlVHqq38KJU&list=PLUl4u3cNGP63LmSVIVzy584-ZbjbJ-Y63",
      school: "MIT",
      prof: "Barbara Imperiali, Adam Martin",
    },
    {
      id: 5,
      subject: "Psychology",
      title: "Introduction to Psychology",
      url: "https://youtu.be/P3FKHH2RzjI?t=242",
      thumbnail_url: "https://i3.ytimg.com/vi/P3FKHH2RzjI/hqdefault.jpg",
      school: "Yale",
      prof: "Paul Bloom",
    },
    {
      id: 6,
      subject: "Psychology",
      title: "Families and Couples",
      url: "https://youtu.be/2OUocz6SdtQ?t=780",
      thumbnail_url: "http://i3.ytimg.com/vi/2OUocz6SdtQ/hqdefault.jpg",
      school: "UCLA",
      prof: "Benjamin Karney",
    },
    {
      id: 7,
      subject: "Psychology",
      title: "Introduction to Human Behavior",
      url: "https://youtu.be/OlW917n6mpA?t=1724",
      thumbnail_url:
        "https://i.ytimg.com/an_webp/OlW917n6mpA/mqdefault_6s.webp?du=3000&sqp=CMDxs4UG&rs=AOn4CLANJUxUCjebYCF5SP2WuYnugJzWOQ",
      school: "Biola",
      prof: "Chris Grace",
    },
    {
      id: 8,
      subject: "Psychology",
      title: "Human Behavioral Biology",
      url: "https://www.youtube.com/watch?v=NNnIGh9g6fA",
      thumbnail_url: "https://img.youtube.com/vi/NNnIGh9g6fA/0.jpg",
      school: "Stanford",
      prof: "Robert Sapolsky",
    },
    {
      id: 9,
      subject: "Physical Science",
      title: "Einstein's General Theory of Relativity",
      url: "https://youtu.be/hbmf0bB38h0?t=14",
      thumbnail_url: "http://i3.ytimg.com/vi/hbmf0bB38h0/hqdefault.jpg",
      school: "Stanford",
      prof: "Leonard Susskind",
    },
    {
      id: 10,
      subject: "Physical Science",
      title: "For the Love of Physics",
      url: "https://youtu.be/4a0FbQdH3dY?t=1532",
      thumbnail_url: "http://i3.ytimg.com/vi/4a0FbQdH3dY/maxresdefault.jpg",
      school: "MIT ",
      prof: "Emeritus Walter Lewin",
    },
    {
      id: 11,
      subject: "Physical Science",
      title: "Organic Chemistry",
      url: "https://youtu.be/WuP0esNPchs?list=PLB572BA3ED0F700F1",
      thumbnail_url: "https://img.youtube.com/vi/WuP0esNPchs/1.jpg",
      school: "Yale ",
      prof: "Michael McBride",
    },
    {
      id: 12,
      subject: "History",
      title: "The Ancient World and Us",
      url: "https://youtu.be/goRP7PtHx5U?t=1865",
      thumbnail_url: "https://img.youtube.com/vi/goRP7PtHx5U/3.jpg",
      school: "Ediburgh",
      prof: "Mary Beard",
    },
    {
      id: 13,
      subject: "History",
      title: "The Dark Ages",
      url: "https://youtu.be/GDNTsdtbKy8",
      thumbnail_url: "https://img.youtube.com/vi/GDNTsdtbKy8/mqdefault.jpg",
      school: "Yale",
      prof: "Donald Kagan",
    },
    {
      id: 14,
      subject: "History",
      title: "The Persian Wars",
      url: "https://youtu.be/E28PaeQQQC0",
      thumbnail_url: "https://img.youtube.com/vi/E28PaeQQQC0/mqdefault.jpg",
      school: "Yale",
      prof: "Donald Kagan",
    },
    {
      id: 15,
      subject: "History",
      title: "History of the World Since 1500 CE",
      url: "https://www.youtube.com/watch?v=B2wyclHrvzo&list=PL0F20231852519BBC&t=278s",
      thumbnail_url: "http://i3.ytimg.com/vi/B2wyclHrvzo/maxresdefault.jpg",
      school: "Columbia",
      prof: "Columbia",
    },
    {
      id: 16,
      subject: "Literature",
      title: "Introduction to Theory of Literature with Paul H. Fry",
      url: "https://youtu.be/4YY4CTSQ8nY?t=303",
      thumbnail_url: "https://i3.ytimg.com/vi/4YY4CTSQ8nY/hqdefault.jpg",
      school: "Yale",
      prof: "Paul H. Fry",
    },
    {
      id: 17,
      subject: "Literature",
      title: "Jane Austen",
      url: "https://youtu.be/Tmdi6m84AaQ?t=258",
      thumbnail_url: "https://img.youtube.com/vi/Tmdi6m84AaQ/3.jpg",
      school: "Oxford",
      prof: "Sandie Byrne",
    },
    {
      id: 18,
      subject: "Literature",
      title: "The American Novel Since 1945 with Amy Hungerford",
      url: "https://youtu.be/TyVAU5iGe0k?t=1884",
      thumbnail_url:
        "https://www.youtube.com/watch?v=TyVAU5iGe0k&list=PLE33BCD966FF96F23",
      school: "Yale",
      prof: "Amy Hungerford ",
    },
    {
      id: 19,
      subject: "Computer Science",
      title: "Introduction to Algorithms",
      url: "https://youtu.be/ENyox7kNKeY?t=1028",
      thumbnail_url: "http://i3.ytimg.com/vi/ENyox7kNKeY/maxresdefault.jpg",
      school: "MIT",
      prof: "Erik Demaine",
    },
    {
      id: 20,
      subject: "Computer Science",
      title: "Database Systems",
      url: "https://youtu.be/_QL0VFW57Pg?t=4195",
      thumbnail_url: "http://i3.ytimg.com/vi/TEjDYtkLRdQ/hddefault.jpg",
      school: "UC Davis",
      prof: "Mohammad Sadoghi",
    },
    {
      id: 21,
      subject: "Computer Science",
      title: "Computer Graphics",
      url: "https://youtu.be/TEjDYtkLRdQ?t=1023",
      thumbnail_url: "http://i3.ytimg.com/vi/TEjDYtkLRdQ/hqdefault.jpg",
      school: "UC Davis",
      prof: "Ken Joy",
    },
    {
      id: 22,
      subject: "Computer Science",
      title: "AI",
      url: "https://youtu.be/J8Eh7RqggsU?t=1954",
      thumbnail_url:
        "http://i3.ytimg.com/vi/J8Eh7RqggsU?t=1954/maxresdefault.jpg",
      school: "Stanford",
      prof: "Percy Liang",
    },
    {
      id: 23,
      subject: "Mathematics",
      title: "Introduction to Calculus",
      url: "https://youtu.be/I3GWzXRectE?list=PL4d5ZtfQonW0fTwPsRvvg9hMJllVyj1l3&t=527",
      thumbnail_url: "https://img.youtube.com/vi/I3GWzXRectE/mqdefault.jpg",
      school: "Oxford",
      prof: "Dan Ciubotaru",
    },
    {
      id: 24,
      subject: "Mathematics",
      title: "A Vision of Linear Algebra",
      url: "https://youtu.be/azzrfdysfI0?t=43",
      thumbnail_url: "https://i3.ytimg.com/vi/azzrfdysfI0/hqdefault.jpg",
      school: "MIT",
      prof: "Gilbert Strang",
    },
    {
      id: 25,
      subject: "Mathematics",
      title: "Calculus: Trignometric Substitution",
      url: "https://youtu.be/rZDhNZCsz4s?t=1206",
      thumbnail_url: "https://i.ytimg.com/vi/rZDhNZCsz4s/maxresdefault.jpg",
      school: "UCI",
      prof: "Natalia L. Komarova",
    },
    {
      id: 26,
      subject: "Mathematics",
      title: "Mathematics of Big Data and Machine Learning",
      url: "https://youtu.be/0sKPkJME2Jw?t=672",
      thumbnail_url: "https://i.ytimg.com/vi/0sKPkJME2Jw/maxresdefault.jpg",
      school: "MIT",
      prof: "Jeremy Kepner",
    },
    {
      id: 27,
      subject: "Social Science",
      title: "SOC119 Live Stream Class 26: The Social Life of God",
      url: "https://www.youtube.com/watch?v=0gIueAXIeKw",
      thumbnail_url: "https://img.youtube.com/vi/0gIueAXIeKw/0.jpg",
      school: "Penn State",
      prof: "Dr. Sam Richards",
    },
    {
      id: 28,
      subject: "Social Science",
      title: "SOC119 Live Stream Class 27: A Sociologist & A Yogi",
      url: "https://www.youtube.com/watch?v=x_-OykbUA3I",
      thumbnail_url: "https://img.youtube.com/vi/x_-OykbUA3I/0.jpg",
      school: "Penn State",
      prof: "Dr. Sam Richards",
    },
  ];
  return (
    <div
      className="bg-image"
      style={{ backgroundImage: "url(/wall-texture.jpg)" }}
    >
      <NeonSignHome />
      <p className="home-text">
        College is becoming ever more expensive, but it is also true that great
        college courses, for free, are just a click away...
      </p>

      <p>SCROLL DOWN TO EXPLORE</p>
      <p>
        <i className="arrow"></i>
      </p>

      <p>SELECT A SUBJECT TO GET STARTED</p>

      <Subject subjectList={courseList} />
    </div>
  );
}

export default App;
