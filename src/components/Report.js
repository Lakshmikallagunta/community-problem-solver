import React, { useState } from "react";
                                                       
function Report() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Problem reported successfully!");
    console.log(form);
  };

  return (
    <div className="form-container">
      <h2>Report a Community Problem</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Problem Category</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="garbage">Garbage</option>
          <option value="lighting">Street Light</option>
          <option value="road">Road Damage</option>
          <option value="water">Water Leakage</option>
        </select>

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <label>Upload Image</label>
        <input type="file" name="file" onChange={handleChange} />

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
}

export default Report;
