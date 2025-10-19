// import React, { useState } from "react";


// export default function OptionalSections() {
//   const [sections, setSections] = useState({
//     certifications: false,
//     awards: false,
//     exams: false,
//   });

//   const [certifications, setCertifications] = useState([{ name: "", year: "" }]);
//   const [awards, setAwards] = useState([{ name: "", year: "", description: "" }]);
//   const [exams, setExams] = useState([{ exam: "", score: "", year: "" }]);

//   const toggleSection = (section) => {
//     setSections({ ...sections, [section]: !sections[section] });
//   };

//   const handleAdd = (type) => {
//     if (type === "certification") setCertifications([...certifications, { name: "", year: "" }]);
//     if (type === "award") setAwards([...awards, { name: "", year: "", description: "" }]);
//     if (type === "exam") setExams([...exams, { exam: "", score: "", year: "" }]);
//   };

//   const handleRemove = (type, index) => {
//     if (type === "certification") setCertifications(certifications.filter((_, i) => i !== index));
//     if (type === "award") setAwards(awards.filter((_, i) => i !== index));
//     if (type === "exam") setExams(exams.filter((_, i) => i !== index));
//   };

//   const handleChange = (type, index, e) => {
//     const { name, value } = e.target;
//     if (type === "certification") {
//       const updated = [...certifications];
//       updated[index][name] = value;
//       setCertifications(updated);
//     }
//     if (type === "award") {
//       const updated = [...awards];
//       updated[index][name] = value;
//       setAwards(updated);
//     }
//     if (type === "exam") {
//       const updated = [...exams];
//       updated[index][name] = value;
//       setExams(updated);
//     }
//   };

//   const renderSection = (title, data, type, fields) => (
//     <div className="mb-4">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <h4 className="text-primary">{title}</h4>
//         <div>
//           <button className="btn btn-success me-2" onClick={() => handleAdd(type)}>
//             + Add {title}
//           </button>
//           <button className="btn btn-outline-danger" onClick={() => toggleSection(type)}>
//             Remove Section
//           </button>
//         </div>
//       </div>
//       {data.map((item, index) => (
//         <div key={index} className="card mb-3 p-3 shadow-sm border-primary">
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             <h5 className="text-secondary mb-0">{title} {index + 1}</h5>
//             {data.length > 1 && (
//               <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(type, index)}>
//                 Remove
//               </button>
//             )}
//           </div>
//           <div className="row mt-2">
//             {fields.map((field, idx) => (
//               <div className={`col-md-${field.col} mb-3`} key={idx}>
//                 <label className="form-label">{field.label}</label>
//                 {field.type === "textarea" ? (
//                   <textarea
//                     className="form-control"
//                     rows={3}
//                     name={field.name}
//                     value={item[field.name]}
//                     onChange={(e) => handleChange(type, index, e)}
//                     placeholder={field.placeholder}
//                   />
//                 ) : (
//                   <input
//                     type={field.type}
//                     className="form-control"
//                     name={field.name}
//                     value={item[field.name]}
//                     onChange={(e) => handleChange(type, index, e)}
//                     placeholder={field.placeholder}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="container mt-4 mb-5 p-4 border rounded shadow-sm bg-light">
//       {/* Add Section Dropdown (Top-Left) */}
//       <div className="d-flex justify-content-start mb-4">
//         <div className="dropdown">
//           <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
//             + Add Section
//           </button>
//           <ul className="dropdown-menu">
//             {!sections.certifications && (
//               <li>
//                 <button className="dropdown-item" onClick={() => toggleSection("certifications")}>
//                   Certifications
//                 </button>
//               </li>
//             )}
//             {!sections.awards && (
//               <li>
//                 <button className="dropdown-item" onClick={() => toggleSection("awards")}>
//                   Award or Honor
//                 </button>
//               </li>
//             )}
//             {!sections.exams && (
//               <li>
//                 <button className="dropdown-item" onClick={() => toggleSection("exams")}>
//                   Competitive Exam Results
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>

//       {/* Render sections only if user added */}
//       {sections.certifications && renderSection(
//         "Certifications",
//         certifications,
//         "certification",
//         [
//           { label: "Certification Name", name: "name", type: "text", placeholder: "Enter certification name", col: 6 },
//           { label: "Year", name: "year", type: "text", placeholder: "e.g. 2023", col: 6 }
//         ]
//       )}

//       {sections.awards && renderSection(
//         "Award or Honor",
//         awards,
//         "award",
//         [
//           { label: "Award Name", name: "name", type: "text", placeholder: "Enter award or honor", col: 6 },
//           { label: "Year", name: "year", type: "text", placeholder: "e.g. 2022", col: 3 },
//           { label: "Description", name: "description", type: "textarea", placeholder: "Brief description", col: 12 }
//         ]
//       )}

//       {sections.exams && renderSection(
//         "Competitive Exam Results",
//         exams,
//         "exam",
//         [
//           { label: "Exam Name", name: "exam", type: "text", placeholder: "Enter exam name", col: 6 },
//           { label: "Score / Rank", name: "score", type: "text", placeholder: "Enter score or rank", col: 3 },
//           { label: "Year", name: "year", type: "text", placeholder: "e.g. 2021", col: 3 }
//         ]
//       )}
//     </div>
//   );
// }

import React from "react";

export default function OptionalSections({ data, setData }) {
  const addSectionItem = (section) => {
    const newItem = section === "certifications" ? { name: "", year: "" } : { name: "", year: "", description: "" };
    setData({
      ...data,
      optional: { ...data.optional, [section]: [...data.optional[section], newItem] },
    });
  };

  const updateSectionItem = (section, index, field, value) => {
    const updated = data.optional[section].map((item, idx) => idx === index ? { ...item, [field]: value } : item);
    setData({ ...data, optional: { ...data.optional, [section]: updated } });
  };

  const removeSectionItem = (section, index) => {
    const updated = data.optional[section].filter((_, idx) => idx !== index);
    setData({ ...data, optional: { ...data.optional, [section]: updated } });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <h4>Optional Sections</h4>

      {["certifications", "awards", "exams"].map((section) => (
        <div key={section} className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5>{section.charAt(0).toUpperCase() + section.slice(1)}</h5>
            <button className="btn btn-primary btn-sm" onClick={() => addSectionItem(section)}>Add</button>
          </div>

          {data.optional[section].map((item, idx) => (
            <div key={idx} className="border rounded p-2 mb-2">
              <input type="text" className="form-control mb-1" placeholder="Name/Exam" value={item.name || item.exam || ""} onChange={(e) => updateSectionItem(section, idx, section === "exams" ? "exam" : "name", e.target.value)} />
              <input type="text" className="form-control mb-1" placeholder="Year" value={item.year || ""} onChange={(e) => updateSectionItem(section, idx, "year", e.target.value)} />
              {section !== "exams" && (
                <textarea className="form-control mb-1" placeholder="Description" value={item.description || ""} onChange={(e) => updateSectionItem(section, idx, "description", e.target.value)} />
              )}
              <button className="btn btn-danger btn-sm" onClick={() => removeSectionItem(section, idx)}>Remove</button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
