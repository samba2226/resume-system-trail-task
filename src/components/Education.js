// import React, { useState } from "react";

// export default function EducationPage() {
//   const [educationList, setEducationList] = useState([
//     {
//       qualification: "",
//       institution: "",
//       field: "",
//       startYear: "",
//       endYear: "",
//       grade: "",
//     },
//   ]);

//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedList = [...educationList];
//     updatedList[index][name] = value;
//     setEducationList(updatedList);
//   };

//   const handleAdd = () => {
//     setEducationList([
//       ...educationList,
//       {
//         qualification: "",
//         institution: "",
//         field: "",
//         startYear: "",
//         endYear: "",
//         grade: "",
//       },
//     ]);
//   };

//   const handleRemove = (index) => {
//     const updatedList = [...educationList];
//     updatedList.splice(index, 1);
//     setEducationList(updatedList);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Education Details Submitted:", educationList);
//     alert("Education details saved successfully!");
//   };

//   return (
//     <div className="container mt-5 mb-5">
//       <div className="card shadow-sm p-4">
//         <h2 className="text-center text-primary mb-4">
//           🎓 Education Details
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {educationList.map((edu, index) => (
//             <div
//               key={index}
//               className="border rounded p-3 mb-4 bg-light position-relative"
//             >
//               <h5 className="text-secondary mb-3">
//                 {index === 0
//                   ? "Highest Education"
//                   : `Additional Education ${index}`}
//               </h5>

//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Qualification</label>
//                   <select
//                     name="qualification"
//                     className="form-select"
//                     value={edu.qualification}
//                     onChange={(e) => handleChange(index, e)}
//                     required
//                   >
//                     <option value="">Select qualification</option>
//                     <option value="High School">High School</option>
//                     <option value="Intermediate">Intermediate</option>
//                     <option value="Diploma">Diploma</option>
//                     <option value="Bachelor’s Degree">Bachelor’s Degree</option>
//                     <option value="Master’s Degree">Master’s Degree</option>
//                     <option value="PhD">PhD</option>
//                   </select>
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Institution Name</label>
//                   <input
//                     type="text"
//                     name="institution"
//                     className="form-control"
//                     value={edu.institution}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="Enter school or college"
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Field of Study</label>
//                   <input
//                     type="text"
//                     name="field"
//                     className="form-control"
//                     value={edu.field}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="e.g. Computer Science, Commerce"
//                   />
//                 </div>

//                 <div className="col-md-3 mb-3">
//                   <label className="form-label">Start Year</label>
//                   <input
//                     type="text"
//                     name="startYear"
//                     className="form-control"
//                     value={edu.startYear}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="e.g. 2018"
//                   />
//                 </div>

//                 <div className="col-md-3 mb-3">
//                   <label className="form-label">End Year</label>
//                   <input
//                     type="text"
//                     name="endYear"
//                     className="form-control"
//                     value={edu.endYear}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="e.g. 2022"
//                   />
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <label className="form-label">Grade / CGPA</label>
//                   <input
//                     type="text"
//                     name="grade"
//                     className="form-control"
//                     value={edu.grade}
//                     onChange={(e) => handleChange(index, e)}
//                     placeholder="e.g. 8.7 CGPA"
//                   />
//                 </div>
//               </div>

//               {educationList.length > 1 && (
//                 <button
//                   type="button"
//                   className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
//                   onClick={() => handleRemove(index)}
//                 >
//                   Remove
//                 </button>
//               )}
//             </div>
//           ))}

//           <div className="d-flex justify-content-between">
//             <button
//               type="button"
//               className="btn btn-info"
//               onClick={handleAdd}
//             >
//               ➕ Add More Education
//             </button>

//             <button type="submit" className="btn btn-success">
//               Save Education Details
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Education({ data, setData }) {
  const highestOptions = [
    "High School",
    "Intermediate / Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Other"
  ];

  const updateHighest = (value) => {
    setData({ ...data, education: { ...data.education, highest: value } });
  };

  const addEducationDetail = () => {
    setData({
      ...data,
      education: {
        ...data.education,
        details: [...data.education.details, { degree: "", institute: "", year: "" }]
      }
    });
  };

  const updateEducationDetail = (index, field, value) => {
    const updated = data.education.details.map((edu, idx) =>
      idx === index ? { ...edu, [field]: value } : edu
    );
    setData({ ...data, education: { ...data.education, details: updated } });
  };

  const removeEducationDetail = (index) => {
    const updated = data.education.details.filter((_, idx) => idx !== index);
    setData({ ...data, education: { ...data.education, details: updated } });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <h4>Education</h4>

      {/* Highest Education Dropdown */}
      <div className="mb-3">
        <label className="form-label">Highest Education</label>
        <select
          className="form-select"
          value={data.education.highest}
          onChange={(e) => updateHighest(e.target.value)}
        >
          <option value="">Select</option>
          {highestOptions.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))} 
        </select>
      </div>

      {/* Multiple Education Details */}
      <div className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5>Education Details</h5>
          <button className="btn btn-primary btn-sm" onClick={addEducationDetail}>Add Education</button>
        </div>

        {data.education.details.map((edu, idx) => (
          <div key={idx} className="border rounded p-2 mb-2">
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Degree / Course"
              value={edu.degree}
              onChange={(e) => updateEducationDetail(idx, "degree", e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Institute / College"
              value={edu.institute}
              onChange={(e) => updateEducationDetail(idx, "institute", e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Year of Completion"
              value={edu.year}
              onChange={(e) => updateEducationDetail(idx, "year", e.target.value)}
            />
            <button className="btn btn-danger btn-sm" onClick={() => removeEducationDetail(idx)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
