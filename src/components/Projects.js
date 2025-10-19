// import React, { useState } from "react";


// export default function Project() {
//   const [projects, setProjects] = useState([
//     { title: "", tech: "", description: "", link: "" },
//   ]);

//   // Handle input changes
//   const handleChange = (index, e) => {
//     const { name, value } = e.target;
//     const newProjects = [...projects];
//     newProjects[index][name] = value;
//     setProjects(newProjects);
//   };

//   // Add new project
//   const addProject = () => {
//     setProjects([
//       ...projects,
//       { title: "", tech: "", description: "", link: "" },
//     ]);
//   };

//   // Remove project
//   const removeProject = (index) => {
//     const newProjects = projects.filter((_, i) => i !== index);
//     setProjects(newProjects);
//   };

//   return (
//     <div className="container mt-4 mb-5 p-4 border rounded shadow-sm bg-light position-relative">
//       {/* Header + Add Button */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3 className="text-primary">Project Details</h3>
//         <button className="btn btn-success" onClick={addProject}>
//           + Add Project
//         </button>
//       </div>

//       {/* Project Cards */}
//       {projects.map((proj, index) => (
//         <div key={index} className="card mb-4 p-3 shadow-sm border-primary">
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             <h5 className="text-secondary mb-0">Project {index + 1}</h5>
//             {projects.length > 1 && (
//               <button
//                 className="btn btn-outline-danger btn-sm"
//                 onClick={() => removeProject(index)}
//               >
//                 Remove
//               </button>
//             )}
//           </div>

//           <div className="row mt-2">
//             <div className="col-md-6 mb-3">
//               <label className="form-label">Project Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="title"
//                 value={proj.title}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Enter project title"
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label className="form-label">Technologies Used</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="tech"
//                 value={proj.tech}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="e.g. React, Node.js, MongoDB"
//               />
//             </div>

//             <div className="col-md-12 mb-3">
//               <label className="form-label">Description</label>
//               <textarea
//                 className="form-control"
//                 rows="3"
//                 name="description"
//                 value={proj.description}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="Briefly describe your project"
//               ></textarea>
//             </div>

//             <div className="col-md-12 mb-3">
//               <label className="form-label">Project Link (Optional)</label>
//               <input
//                 type="url"
//                 className="form-control"
//                 name="link"
//                 value={proj.link}
//                 onChange={(e) => handleChange(index, e)}
//                 placeholder="https://github.com/your-project"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function Projects({ data, setData }) {
  const addProject = () => {
    setData({ ...data, projects: [...data.projects, { name: "", description: "" }] });
  };

  const updateProject = (index, field, value) => {
    const updated = data.projects.map((proj, idx) =>
      idx === index ? { ...proj, [field]: value } : proj
    );
    setData({ ...data, projects: updated });
  };

  const removeProject = (index) => {
    const updated = data.projects.filter((_, idx) => idx !== index);
    setData({ ...data, projects: updated });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h4>Projects</h4>
        <button className="btn btn-primary btn-sm" onClick={addProject}>Add Project</button>
      </div>

      {data.projects.map((proj, idx) => (
        <div key={idx} className="border rounded p-2 mb-2">
          <input type="text" className="form-control mb-1" placeholder="Project Name" value={proj.name} onChange={(e) => updateProject(idx, "name", e.target.value)} />
          <textarea className="form-control mb-1" placeholder="Description" value={proj.description} onChange={(e) => updateProject(idx, "description", e.target.value)} />
          <button className="btn btn-danger btn-sm" onClick={() => removeProject(idx)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

