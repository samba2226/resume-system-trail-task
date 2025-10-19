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

