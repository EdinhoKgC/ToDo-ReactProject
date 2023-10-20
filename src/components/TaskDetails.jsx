import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TaskDetails.css";

import Button from "./Button";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui
          impedit? Suscipit recusandae blanditiis maiores officiis architecto
          beatae minima minus sapiente, repudiandae vitae labore laudantium
          quibusdam at error exercitationem aspernatur!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
