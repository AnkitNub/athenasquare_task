import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [data, setData] = useState(null);
  const sectionsRef = useRef([null, null, null]);
  
  function handleScroll() {
    for (let i = 0; i < sectionsRef.current.length; i++) {
      const center = (sectionsRef.current[i].getBoundingClientRect().bottom + sectionsRef.current[i].getBoundingClientRect().top) / 2;
      if (
        sectionsRef.current[i] &&
        center < window.innerHeight
      ) {
        setCurrentSection(i);
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1"
      );
      const json = await response.json();
      setData(json);
    }
    fetchData();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  function updateRightContent() {
    switch (currentSection) {
      case 0:
        return (
          <video
            autoPlay
            loop
            muted
            playsInline
            src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4'
          />
        );
      case 1:
        return (
          <video
            src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
        );
      case 2:
        return (
          <video
            src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
        );
      default:
        return (
          <video
            src='https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4'
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        );
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className='chad-container'>
        <div className='container-small'>
          <div className='cntr'>
            <h2>Double the hires, half the efforts</h2>
            <p>
              Open conversations and nurture relationships at a scale and be the
              first choice when you ideal candidate is ready to explore.
            </p>
            <div className='div-view'>
              <span className='btn-view'>View Kula Outreach</span>
            </div>
          </div>
        </div>
        <div className='container-large'>
          <div className='container'>
            <div className='left-side'>
              {data && data.texts ? (
                data.texts.map((text, i) => (
                  <div
                    className='content'
                    ref={(el) => (sectionsRef.current[i] = el)}>
                    <h3>{text.heading}</h3>
                    <h1>{text.subHeading}</h1>
                    <p>{text.description}</p>
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <div className='right-side'>
              <div className='vid-container'>{updateRightContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
