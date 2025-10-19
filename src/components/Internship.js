// import React, { useState } from "react";


// export default function Internship() {
//   const [internships, setInternships] = useState([
//     { company: "", role: "", duration: "", description: "" },
//   ]);

//   // Handle input change
//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const newInternships = [...internships];
//     newInternships[index][name] = value;
//     setInternships(newInternships);
//   };

//   // Add new internship
//   const addInternship = () => {
//     setInternships([
//       ...internships,
//       { company: "", role: "", duration: "", description: "" },
//     ]);
//   };

//   // Remove internship
//   const removeInternship = (index) => {
//     const newInternships = internships.filter((_, i) => i !== index);
//     setInternships(newInternships);
//   };

//   return (
//     <div className="container mt-4 mb-5 p-4 border rounded shadow-sm bg-light position-relative">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3 className="text-primary">Internship Details</h3>
//         <button className="btn btn-success" onClick={addInternship}>
//           + Add Internship
//         </button>
//       </div>

//       {internships.map((intern, index) => (
//         <div key={index} className="card mb-4 p-3 shadow-sm border-primary">
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             <h5 className="text-secondary mb-0">Internship {index + 1}</h5>
//             {internships.length > 1 && (
//               <button
//                 className="btn btn-outline-danger btn-sm"
//                 onClick={() => removeInternship(index)}
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
//                 value={intern.company}
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
//                 value={intern.role}
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
//                 value={intern.duration}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="e.g. 3 Months"
//               />
//             </div>

//             <div className="col-md-12 mb-3">
//               <label className="form-label">Description</label>
//               <textarea
//                 className="form-control"
//                 rows="3"
//                 name="description"
//                 value={intern.description}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Describe your internship experience"
//               ></textarea>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function Internship({ data, setData }) {
  const addInternship = () => {
    setData({
      ...data,
      internships: [...data.internships, { title: "", company: "", duration: "", description: "" }],
    });
  };

  const updateInternship = (index, field, value) => {
    const updated = data.internships.map((intn, idx) =>
      idx === index ? { ...intn, [field]: value } : intn
    );
    setData({ ...data, internships: updated });
  };

  const removeInternship = (index) => {
    const updated = data.internships.filter((_, idx) => idx !== index);
    setData({ ...data, internships: updated });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Internships</h4>
        <button className="btn btn-primary btn-sm" onClick={addInternship}>Add Internship</button>
      </div>

      {data.internships.map((intn, idx) => (
        <div key={idx} className="border rounded p-2 mb-2">
          <input type="text" className="form-control mb-1" placeholder="Title" value={intn.title} onChange={(e) => updateInternship(idx, "title", e.target.value)} />
          <input type="text" className="form-control mb-1" placeholder="Company" value={intn.company} onChange={(e) => updateInternship(idx, "company", e.target.value)} />
          <input type="text" className="form-control mb-1" placeholder="Duration" value={intn.duration} onChange={(e) => updateInternship(idx, "duration", e.target.value)} />
          <textarea className="form-control mb-1" placeholder="Description" value={intn.description} onChange={(e) => updateInternship(idx, "description", e.target.value)} />
          <button className="btn btn-danger btn-sm" onClick={() => removeInternship(idx)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
