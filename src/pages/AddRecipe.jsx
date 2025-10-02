import { useState } from "react";
import Header from "../components/Header";
import RecipeForm from "../components/RecipeForm";

function AddRecipe() {
  const [inputData, setInputData] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputData) {
      setMessages([...messages, inputData]);
      setInputData("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputData(value);
  };
  return (
    <div className="page-container">
      <Header />
      <RecipeForm
        inputData={inputData}
        messages={messages}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default AddRecipe;
