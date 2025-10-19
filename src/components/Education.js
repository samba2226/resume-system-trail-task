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
