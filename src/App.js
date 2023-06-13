import './App.css';
import Ecomm from './Components/Ecomm';
import Login from "./Components/Login";
import Bag from "./Components/Bag";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Ecomm key="ecomm"/>} />
          <Route path="/login" element={<Login key="login" />} />
          <Route path="/bag" element={<Bag key="bag" />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
