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
