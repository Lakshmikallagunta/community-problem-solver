import React, { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
  };

  return (
    <div className="contact-main">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <strong>Email:</strong> support@communitysolver.com
            </li>
            <li>
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong>Address:</strong> Vijayawada, Andhra Pradesh
            </li>
          </ul>
        </div>

        <div className="contact-form-section">
          <h3>Send us a message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
