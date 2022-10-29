import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div>This is the USERS PAGE</div>
      <hr />
      <button
        style={{
          background: "#9CCC65",
          padding: 5,
          marginLeft: 5,
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => {
          navigate("/users");
        }}
      >
        {""} Change to about page
      </button>
    </div>
  );
}

export default Home;
