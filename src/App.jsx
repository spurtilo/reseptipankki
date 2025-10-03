import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeList from "./pages/RecipeList";
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from "./pages/AddRecipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />}></Route>
        <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
        <Route path="/addrecipe" element={<AddRecipe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
