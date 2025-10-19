// import React, { useState } from "react";


// export default function AcademicAchievements() {
//   const [achievements, setAchievements] = useState([
//     { title: "", year: "", description: "" },
//   ]);

//   // Handle input change
//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updated = [...achievements];
//     updated[index][name] = value;
//     setAchievements(updated);
//   };

//   // Add new achievement
//   const addAchievement = () => {
//     setAchievements([...achievements, { title: "", year: "", description: "" }]);
//   };

//   // Remove achievement
//   const removeAchievement = (index) => {
//     const updated = achievements.filter((_, i) => i !== index);
//     setAchievements(updated);
//   };

//   return (
//     <div className="container mt-4 mb-5 p-4 border rounded shadow-sm bg-light position-relative">
//       {/* Header + Add Button */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3 className="text-primary">Academic Achievements</h3>
//         <button className="btn btn-success" onClick={addAchievement}>
//           + Add Achievement
//         </button>
//       </div>

//       {/* Achievement Cards */}
//       {achievements.map((ach, index) => (
//         <div key={index} className="card mb-3 p-3 shadow-sm border-primary">
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             <h5 className="text-secondary mb-0">Achievement {index + 1}</h5>
//             {achievements.length > 1 && (
//               <button
//                 className="btn btn-outline-danger btn-sm"
//                 onClick={() => removeAchievement(index)}
//               >
//                 Remove
//               </button>
//             )}
//           </div>

//           <div className="row mt-2">
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Title / Award Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="title"
//                 value={ach.title}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Enter achievement title"
//               />
//             </div>

//             <div className="col-md-3 mb-3">
//               <label className="form-label">Year / Date</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="year"
//                 value={ach.year}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="e.g. 2023"
//               />
//             </div>

//             <div className="col-md-12 mb-3">
//               <label className="form-label">Description (Optional)</label>
//               <textarea
//                 className="form-control"
//                 rows="2"
//                 name="description"
//                 value={ach.description}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Add any details about this achievement"
//               ></textarea>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function AcademicAchievements({ data, setData }) {
  const addAcademic = () => {
    setData({ ...data, academics: [...data.academics, { title: "", year: "", description: "" }] });
  };

  const updateAcademic = (index, field, value) => {
    const updated = data.academics.map((a, idx) => idx === index ? { ...a, [field]: value } : a);
    setData({ ...data, academics: updated });
  };

  const removeAcademic = (index) => {
    const updated = data.academics.filter((_, idx) => idx !== index);
    setData({ ...data, academics: updated });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Academic Achievements</h4>
        <button className="btn btn-primary btn-sm" onClick={addAcademic}>Add Achievement</button>
      </div>

      {data.academics.map((a, idx) => (
        <div key={idx} className="border rounded p-2 mb-2">
          <input type="text" className="form-control mb-1" placeholder="Title" value={a.title} onChange={(e) => updateAcademic(idx, "title", e.target.value)} />
          <input type="text" className="form-control mb-1" placeholder="Year" value={a.year} onChange={(e) => updateAcademic(idx, "year", e.target.value)} />
          <textarea className="form-control mb-1" placeholder="Description" value={a.description} onChange={(e) => updateAcademic(idx, "description", e.target.value)} />
          <button className="btn btn-danger btn-sm" onClick={() => removeAcademic(idx)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
