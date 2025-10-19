import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function ResumePreview({ data }) {
  if (!data) return null;

  const downloadPDF = () => {
    const input = document.getElementById("resume-preview");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Student_Resume.pdf");
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Resume Preview</h2>
      <div id="resume-preview" className="p-4 border rounded bg-white shadow-sm">
        {/* Personal */}
        {data.personal && (
          <div className="mb-3 d-flex">
            {data.personal.photo && <img src={data.personal.photo} alt="Profile" className="me-3" style={{ width: "120px", height: "120px", objectFit: "cover" }} />}
            <div>
              <h4>{data.personal.fullName}</h4>
              <p>{data.personal.email} | {data.personal.mobile} | {data.personal.location}</p>
              <p>{data.personal.gender} | {data.personal.dob}</p>
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.highest && (
          <div className="mb-3">
            <h5 className="text-primary">Education</h5>
            <p>{data.education.highest}</p>
            {data.education.details.map((edu, idx) => (
              <p key={idx}>{edu.degree} - {edu.institute} ({edu.year})</p>
            ))}
          </div>
        )}

        {/* Internships */}
        {data.internships.length > 0 && (
          <div className="mb-3">
            <h5 className="text-primary">Internships</h5>
            {data.internships.map((i, idx) => (
              <p key={idx}><strong>{i.title}</strong> | {i.company} | {i.duration}<br />{i.description}</p>
            ))}
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div className="mb-3">
            <h5 className="text-primary">Projects</h5>
            {data.projects.map((p, idx) => <p key={idx}><strong>{p.name}</strong><br />{p.description}</p>)}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-3">
            <h5 className="text-primary">Key Skills</h5>
            <p>{data.skills.join(", ")}</p>
          </div>
        )}

        {/* Work */}
        {data.work.length > 0 && (
          <div className="mb-3">
            <h5 className="text-primary">Work Experience</h5>
            {data.work.map((w, idx) => (
              <p key={idx}><strong>{w.position}</strong> | {w.company} | {w.duration}<br />{w.description}</p>
            ))}
          </div>
        )}

        {/* Languages */}
        {data.languages.length > 0 && (
          <div className="mb-3">
            <h5 className="text-primary">Languages</h5>
            {data.languages.map((l, idx) => <span key={idx} className="badge bg-secondary me-2">{l.name} ({l.proficiency})</span>)}
          </div>
        )}

        {/* Academic */}
        {data.academics.length > 0 && (
          <div className="mb-3">
            <h5 className="text-primary">Academic Achievements</h5>
            {data.academics.map((a, idx) => <p key={idx}><strong>{a.title}</strong> ({a.year})<br />{a.description}</p>)}
          </div>
        )}

        {/* Optional */}
        {["certifications","awards","exams"].map(section => (
          data.optional[section].length > 0 && (
            <div key={section} className="mb-3">
              <h5 className="text-primary">{section.charAt(0).toUpperCase() + section.slice(1)}</h5>
              {data.optional[section].map((item, idx) => (
                <p key={idx}>
                  {item.name || item.exam} {item.year ? `(${item.year})` : ""}<br />
                  {item.description}
                </p>
              ))}
            </div>
          )
        ))}
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-success" onClick={downloadPDF}>Download Resume PDF</button>
      </div>
    </div>
  );
}
