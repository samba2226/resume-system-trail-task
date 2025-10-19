// import React, { useState } from "react";


// export default function LanguagesKnown() {
//   const [languages, setLanguages] = useState([
//     { name: "", proficiency: "Beginner" },
//   ]);

//   // Handle input change
//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updated = [...languages];
//     updated[index][name] = value;
//     setLanguages(updated);
//   };

//   // Add new language
//   const addLanguage = () => {
//     setLanguages([...languages, { name: "", proficiency: "Beginner" }]);
//   };

//   // Remove language
//   const removeLanguage = (index) => {
//     const updated = languages.filter((_, i) => i !== index);
//     setLanguages(updated);
//   };

//   return (
//     <div className="container mt-4 mb-5 p-4 border rounded shadow-sm bg-light position-relative">
//       {/* Header + Add Button */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3 className="text-primary">Languages Known</h3>
//         <button className="btn btn-success" onClick={addLanguage}>
//           + Add Language Known
//         </button>
//       </div>

//       {/* Language Cards */}
//       {languages.map((lang, index) => (
//         <div key={index} className="card mb-3 p-3 shadow-sm border-primary">
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             <h5 className="text-secondary mb-0">Language {index + 1}</h5>
//             {languages.length > 1 && (
//               <button
//                 className="btn btn-outline-danger btn-sm"
//                 onClick={() => removeLanguage(index)}
//               >
//                 Remove
//               </button>
//             )}
//           </div>

//           <div className="row mt-2">
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Language Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="name"
//                 value={lang.name}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Enter language name"
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label className="form-label">Proficiency Level</label>
//               <select
//                 name="proficiency"
//                 className="form-select"
//                 value={lang.proficiency}
//                 onChange={(e) => handleChange(index, e)}
//               >
//                 <option value="Beginner">Beginner</option>
//                 <option value="Intermediate">Intermediate</option>
//                 <option value="Expert">Expert</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Languages({ data, setData }) {
  const [lang, setLang] = useState("");
  const [prof, setProf] = useState("");

  const addLanguage = () => {
    if (!lang.trim() || !prof.trim()) return;
    setData({ ...data, languages: [...data.languages, { name: lang, proficiency: prof }] });
    setLang("");
    setProf("");
  };

  const removeLanguage = (index) => {
    const updated = data.languages.filter((_, idx) => idx !== index);
    setData({ ...data, languages: updated });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Languages</h4>
        <button className="btn btn-primary btn-sm" onClick={addLanguage}>Add Language</button>
      </div>

      <div className="input-group mb-2">
        <input type="text" className="form-control" placeholder="Language" value={lang} onChange={(e) => setLang(e.target.value)} />
        <input type="text" className="form-control" placeholder="Proficiency (Beginner/Intermediate/Expert)" value={prof} onChange={(e) => setProf(e.target.value)} />
      </div>

      {data.languages.map((l, idx) => (
        <span key={idx} className="badge bg-secondary me-2 mb-1">
          {l.name} ({l.proficiency}) 
          <button className="btn btn-sm btn-danger ms-1" onClick={() => removeLanguage(idx)}>x</button>
        </span>
      ))}
    </div>
  );
}
