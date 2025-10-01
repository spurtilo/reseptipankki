import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RecipeForm from "./pages/RecipeForm";
import RecipeList from "./pages/RecipeList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Link to={"/"}>Reseptit</Link>
        <Link to={"/recipeform"}>Syötä resepti</Link>
      </div>

      <Routes>
        <Route
          style={{ padding: "10px 20px", display: "inline-block" }}
          path="/"
          element={<RecipeList />}
        ></Route>
        <Route
          style={{ padding: "10px 20px", display: "inline-block" }}
          path="/recipeform"
          element={<RecipeForm />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
