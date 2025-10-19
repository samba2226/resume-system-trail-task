import  { useState } from "react";

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
