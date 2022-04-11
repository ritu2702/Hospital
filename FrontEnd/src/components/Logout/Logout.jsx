import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/context";
import logout from "../../images/logout.jpg";

export const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handlePage = (e) => {
    e.preventDefault();
    dispatch({ type: "USER", payload: false });
    navigate("/", { replace: true });
  };
  return (
    <div>
      <div className="logoutButton" onClick={handlePage}>
        <img src={logout} alt="" />
        <button>Go Back</button>
      </div>
    </div>
  );
};
