import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <button
          style={{ background: "red", color: "white" ,margin:"10px"}}
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </button>
        &nbsp; &nbsp;
        <button
          style={{ background: "green", color: "white" }}
          onClick={() => {
            navigate(1);
          }}
        >
          Go Forwert{" "}
        </button>
      </div>
    </div>
  );
};

export default Footer;
