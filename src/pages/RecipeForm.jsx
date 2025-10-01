import { useState } from "react";

function RecipeForm() {
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
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={inputData} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {messages.length > 0 &&
        messages.map((message, index) => <li key={index}>{message}</li>)}
    </>
  );
}

export default RecipeForm;
