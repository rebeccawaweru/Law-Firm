import { Home, Contact, Patners, Services } from "./views";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { Joleen , Rachael} from "./views/content";
function App() {
  return (
  <Router>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/patners" element={<Patners/>}/>
    <Route path="/patners/jollin" element={<Joleen/>}/>
    <Route path="/patners/rachael" element={<Rachael/>}/>
    <Route path="/services" element={<Services/>}/>
    </Routes>
  </Router>
  );
}

export default App;
