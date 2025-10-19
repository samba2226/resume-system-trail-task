// import React, { useState } from "react";


// export default function WorkExperience() {
//   const [workExperiences, setWorkExperiences] = useState([
//     { company: "", role: "", duration: "", description: "" },
//   ]);

//   // Handle input change
//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updated = [...workExperiences];
//     updated[index][name] = value;
//     setWorkExperiences(updated);
//   };

//   // Add new work experience
//   const addWorkExperience = () => {
//     setWorkExperiences([
//       ...workExperiences,
//       { company: "", role: "", duration: "", description: "" },
//     ]);
//   };

//   // Remove work experience
//   const removeWorkExperience = (index) => {
//     const updated = workExperiences.filter((_, i) => i !== index);
//     setWorkExperiences(updated);
//   };

//   return (
//     <div className="container mt-4 mb-5 p-4 border rounded shadow-sm bg-light position-relative">
//       {/* Header + Add Button */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3 className="text-primary">Work Experience</h3>
//         <button className="btn btn-success" onClick={addWorkExperience}>
//           + Add Work Experience
//         </button>
//       </div>

//       {/* Work Experience Cards */}
//       {workExperiences.map((work, index) => (
//         <div key={index} className="card mb-4 p-3 shadow-sm border-primary">
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             <h5 className="text-secondary mb-0">Experience {index + 1}</h5>
//             {workExperiences.length > 1 && (
//               <button
//                 className="btn btn-outline-danger btn-sm"
//                 onClick={() => removeWorkExperience(index)}
//               >
//                 Remove
//               </button>
//             )}
//           </div>

//           <div className="row mt-2">
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Company Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="company"
//                 value={work.company}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Enter company name"
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label className="form-label">Role / Position</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="role"
//                 value={work.role}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Enter your role"
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label className="form-label">Duration</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="duration"
//                 value={work.duration}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="e.g. Jan 2022 - Dec 2022"
//               />
//             </div>

//             <div className="col-md-12 mb-3">
//               <label className="form-label">Description / Responsibilities</label>
//               <textarea
//                 className="form-control"
//                 rows="3"
//                 name="description"
//                 value={work.description}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Describe your role and responsibilities"
//               ></textarea>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function WorkExperience({ data, setData }) {
  const addWork = () => {
    setData({ ...data, work: [...data.work, { position: "", company: "", duration: "", description: "" }] });
  };

  const updateWork = (index, field, value) => {
    const updated = data.work.map((w, idx) => idx === index ? { ...w, [field]: value } : w);
    setData({ ...data, work: updated });
  };

  const removeWork = (index) => {
    const updated = data.work.filter((_, idx) => idx !== index);
    setData({ ...data, work: updated });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Work Experience</h4>
        <button className="btn btn-primary btn-sm" onClick={addWork}>Add Work Experience</button>
      </div>

      {data.work.map((w, idx) => (
        <div key={idx} className="border rounded p-2 mb-2">
          <input type="text" className="form-control mb-1" placeholder="Position" value={w.position} onChange={(e) => updateWork(idx, "position", e.target.value)} />
          <input type="text" className="form-control mb-1" placeholder="Company" value={w.company} onChange={(e) => updateWork(idx, "company", e.target.value)} />
          <input type="text" className="form-control mb-1" placeholder="Duration" value={w.duration} onChange={(e) => updateWork(idx, "duration", e.target.value)} />
          <textarea className="form-control mb-1" placeholder="Description" value={w.description} onChange={(e) => updateWork(idx, "description", e.target.value)} />
          <button className="btn btn-danger btn-sm" onClick={() => removeWork(idx)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
