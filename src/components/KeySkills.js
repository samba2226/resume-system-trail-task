// import React, { useState } from "react";


// export default function KeySkills() {
//   const [skills, setSkills] = useState([
//     "Communication Skills",
//     "Creativity",
//     "Team Management",
//     "Java",
//     "C Programming Language",
//     "HTML and CSS",
//     "Data Structures",
//     "Python",
//   ]);

//   const suggestedSkills = [
//     "Object Oriented Programming",
//     "Proportion & Variation",
//     "Table Charts",
//     "Sentence Correction",
//     "Syllogism",
//     "Ratio",
//     "Computer Network",
//   ];

//   const [newSkill, setNewSkill] = useState("");

//   // Add a new skill
//   const addSkill = () => {
//     if (newSkill.trim() !== "" && !skills.includes(newSkill)) {
//       setSkills([...skills, newSkill]);
//       setNewSkill("");
//     }
//   };

//   // Remove a skill
//   const removeSkill = (skill) => {
//     setSkills(skills.filter((s) => s !== skill));
//   };

//   // Add from suggestions
//   const addSuggestedSkill = (skill) => {
//     if (!skills.includes(skill)) {
//       setSkills([...skills, skill]);
//     }
//   };

//   return (
//     <div className="container mt-4 mb-5 p-4 border rounded shadow-sm bg-light">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h3 className="text-primary mb-0">Key Skills</h3>
//       </div>

//       <p className="text-muted">
//         Recruiters look for candidates with specific skills. Add them here to rank higher.
//       </p>

//       {/* Current Skills */}
//       <div className="mb-3">
//         {skills.map((skill, index) => (
//           <span
//             key={index}
//             className="badge bg-primary text-light me-2 mb-2 fs-6"
//             style={{ cursor: "pointer" }}
//             onClick={() => removeSkill(skill)}
//           >
//             {skill} ✕
//           </span>
//         ))}
//       </div>

//       {/* Add New Skill */}
//       <div className="input-group mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter skills here..."
//           value={newSkill}
//           onChange={(e) => setNewSkill(e.target.value)}
//         />
//         <button className="btn btn-success" onClick={addSkill}>
//           + Add Skill
//         </button>
//       </div>

//       {/* Suggested Skills */}
//       <h5 className="text-secondary mb-2">
//         Based on your activity on platform:
//       </h5>
//       <p className="text-muted mb-3">
//         We've identified skills where you show medium to high proficiency.
//       </p>

//       <div>
//         {suggestedSkills.map((skill, index) => (
//           <span
//             key={index}
//             className="badge bg-outline-primary border border-primary text-dark me-2 mb-2 fs-6"
//             style={{ cursor: "pointer", backgroundColor: "white" }}
//             onClick={() => addSuggestedSkill(skill)}
//           >
//             {skill} +
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function KeySkills({ data, setData }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill.trim() === "") return;
    setData({ ...data, skills: [...data.skills, skill] });
    setSkill("");
  };

  const removeSkill = (index) => {
    const updated = data.skills.filter((_, idx) => idx !== index);
    setData({ ...data, skills: updated });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <h4>Key Skills</h4>
      <div className="input-group mb-2">
        <input type="text" className="form-control" placeholder="Enter skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
        <button className="btn btn-primary" onClick={addSkill}>Add Skill</button>
      </div>
      {data.skills.map((s, idx) => (
        <span key={idx} className="badge bg-secondary me-2 mb-1">
          {s} <button className="btn btn-sm btn-danger ms-1" onClick={() => removeSkill(idx)}>x</button>
        </span>
      ))}
    </div>
  );
}
