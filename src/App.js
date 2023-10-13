import { Home, Contact } from "./views";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>
  );
}

export default App;
