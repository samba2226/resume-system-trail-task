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
