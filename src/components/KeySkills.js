import  { useState } from "react";

export default function KeySkills({ data, setData }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (skill.trim() === "") return;
    setData({ ...data, skills: [...data.skills, skill] });
    setSkill("");
  };

  const removeSkill = (index) => {
    const updated = data.skills.filter((_, idx) => idx !== index);
    setData({ ...data, skills: updated });
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <h4>Key Skills</h4>
      <div className="input-group mb-2">
        <input type="text" className="form-control" placeholder="Enter skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
        <button className="btn btn-primary" onClick={addSkill}>Add Skill</button>
      </div>
      {data.skills.map((s, idx) => (
        <span key={idx} className="badge bg-secondary me-2 mb-1">
          {s} <button className="btn btn-sm btn-danger ms-1" onClick={() => removeSkill(idx)}>x</button>
        </span>
      ))}
    </div>
  );
}
