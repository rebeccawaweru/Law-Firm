import Home from "./views/home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
 
  </Router>
  );
}

export default App;
