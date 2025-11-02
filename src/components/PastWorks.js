import React, { useEffect, useState } from "react";
import axios from "axios";

function PastWorks() {
  const [pastReports, setPastReports] = useState([]);

  useEffect(() => {
    // Fetch resolved reports from your backend
    axios
      .get("http://localhost:5000/report")
      .then((res) => {
        const resolved = res.data.filter((report) => report.category === "Resolved");
        setPastReports(resolved);
      })
      .catch((err) => console.error("Error fetching past works:", err));
  }, []);

  return (
    <div className="past-works-container" style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", color: "#123456" }}>Past Community Works</h2>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Take a look at the problems our community has already solved together.
      </p>

      <div className="past-works-grid" style={{ display: "grid", gap: "20px" }}>
        {pastReports.length > 0 ? (
          pastReports.map((report) => (
            <div
              key={report._id}
              className="work-card"
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={report.file || "https://via.placeholder.com/400x200"}
                alt={report.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h3 style={{ marginTop: "10px" }}>{report.name}</h3>
              <p>{report.description}</p>
              <span
                style={{
                  background: "green",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "0.9rem",
                }}
              >
                {report.category}
              </span>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No past works available yet.</p>
        )}
      </div>
    </div>
  );
}

export default PastWorks;
