import React, { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import KeySkills from "./components/KeySkills";
import WorkExperience from "./components/WorkExperience";
import Languages from "./components/Languages";
import AcademicAchievements from "./components/AcademicAchievements";
import OptionalSections from "./components/OptionalSections";
import ResumePreview from "./components/temp";

export default function App() {
  const [data, setData] = useState({
    personal: { fullName: "", mobile: "", email: "", photo: "", location: "", dob: "", gender: "" },
    education: { highest: "", details: [] },
    internships: [],
    projects: [],
    skills: [],
    work: [],
    languages: [],
    academics: [],
    optional: { certifications: [], awards: [], exams: [] },
  })
  
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student Resume Builder</h1>

      {!submitted ? (
        <>
          <PersonalDetails data={data} setData={setData} />
          <Education data={data} setData={setData} />
          <Internship data={data} setData={setData} />
          <Projects data={data} setData={setData} />
          <KeySkills data={data} setData={setData} />
          <WorkExperience data={data} setData={setData} />
          <Languages data={data} setData={setData} />
          <AcademicAchievements data={data} setData={setData} />
          <OptionalSections data={data} setData={setData} />

          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={() => setSubmitted(true)}>Preview Resume</button>
          </div>
        </>
      ) : (
        <>
          <ResumePreview data={data} />
          <div className="text-center mt-3">
            <button className="btn btn-warning" onClick={() => setSubmitted(false)}>Edit Details</button>
          </div>
        </>
      )}
    </div>
  );
}
