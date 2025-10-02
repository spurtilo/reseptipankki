import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeList from "./pages/RecipeList";
import AddRecipe from "./pages/AddRecipe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />}></Route>
        <Route path="/addrecipe" element={<AddRecipe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
