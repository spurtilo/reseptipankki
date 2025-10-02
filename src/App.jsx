import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeForm from "./pages/RecipeForm";
import RecipeList from "./pages/RecipeList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />}></Route>
        <Route path="/recipeform" element={<RecipeForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
