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
