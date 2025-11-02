// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// import garbageImg from "../assets/trash.jpg";
// import streetlightImg from "../assets/pole.jpeg";
// import potholeImg from "../assets/pothle.jpg";

// function Home() {
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const problems = [
//     {
//       id: 1,
//       title: "Garbage collection issue",
//       description: "Overflowing bins in Sector 5 causing foul smell.",
//       status: "Unresolved",
//       img: garbageImg,
//     },
//     {
//       id: 2,
//       title: "Street light not working",
//       description: "Main road lights have been off for 3 days.",
//       status: "In Progress",
//       img: streetlightImg,
//     },
//     {
//       id: 3,
//       title: "Potholes on road",
//       description: "Deep potholes on school road causing accidents.",
//       status: "Resolved",
//       img: potholeImg,
//     },
//   ];

//   return (
//     <section className="problems-section">
//       <h2>Current Community Problems</h2>

//       {problems.map((p) => (
//         <div key={p.id} className="problem-card">
//           <img src={p.img} alt={p.title} />
//           <div className="problem-info">
//             <h3>{p.title}</h3>
//             <p>{p.description}</p>
//             <span
//               className={`status ${p.status.toLowerCase().replace(" ", "-")}`}
//             >
//               {p.status}
//             </span>
//           </div>
//         </div>
//       ))}

//       {/* Buttons to navigate to Login and Signup pages */}
//       <div className="auth-buttons-top">
//         <button
//           className="auth-btn"
//           onClick={() => navigate("/login")} // Navigate to Login page
//         >
//           Login
//         </button>
//         <button
//           className="auth-btn"
//           onClick={() => navigate("/signup")} // Navigate to Signup page
//         >
//           Signup
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import garbageImg from "../assets/trash.jpg";
import streetlightImg from "../assets/pole.jpeg";
import potholeImg from "../assets/pothle.jpg";

function Home() {
  const problems = [
    {
      id: 1,
      title: "Garbage collection issue",
      description: "Overflowing bins in Sector 5 causing foul smell.",
      status: "Unresolved",
      img: garbageImg,
    },
    {
      id: 2,
      title: "Street light not working",
      description: "Main road lights have been off for 3 days.",
      status: "In Progress",
      img: streetlightImg,
    },
    {
      id: 3,
      title: "Potholes on road",
      description: "Deep potholes on school road causing accidents.",
      status: "Resolved",
      img: potholeImg,
    },
  ];

  return (
    <section className="problems-section">
      <h2>Current Community Problems</h2>

      {problems.map((p) => (
        <div key={p.id} className="problem-card">
          <img src={p.img} alt={p.title} />
          <div className="problem-info">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span
              className={`status ${p.status.toLowerCase().replace(" ", "-")}`}
            >
              {p.status}
            </span>
          </div>
        </div>
      ))}

      {/* The top-right buttons (Login and Signup) */}
      <div className="auth-buttons-top">
        <Link to="/login">
          <button className="auth-btn">Login</button>
        </Link>
        <Link to="/signup">
          <button className="auth-btn">Signup</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
