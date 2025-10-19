import React from "react";

export default function PersonalDetails({ data, setData }) {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files[0]) {
      setData({ ...data, personal: { ...data.personal, photo: URL.createObjectURL(files[0]) } });
    } else {
      setData({ ...data, personal: { ...data.personal, [name]: value } });
    }
  };

  return (
    <div className="card mb-4 p-3 shadow-sm">
      <h4>Personal Details</h4>
      <div className="row">
        <div className="col-md-4 text-center mb-3">
          {data.personal.photo && <img src={data.personal.photo} alt="Profile" className="img-fluid rounded mb-2" style={{ maxWidth: "150px" }} />}
          <input type="file" name="photo" className="form-control" onChange={handleChange} />
        </div>
        <div className="col-md-8">
          <input type="text" className="form-control mb-2" placeholder="Full Name" name="fullName" value={data.personal.fullName} onChange={handleChange} />
          <input type="text" className="form-control mb-2" placeholder="Mobile" name="mobile" value={data.personal.mobile} onChange={handleChange} />
          <input type="email" className="form-control mb-2" placeholder="Email" name="email" value={data.personal.email} onChange={handleChange} />
          <input type="text" className="form-control mb-2" placeholder="Location" name="location" value={data.personal.location} onChange={handleChange} />
          <input type="date" className="form-control mb-2" name="dob" value={data.personal.dob} onChange={handleChange} />
          <select className="form-select" name="gender" value={data.personal.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
}
