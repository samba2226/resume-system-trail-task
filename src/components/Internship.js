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
