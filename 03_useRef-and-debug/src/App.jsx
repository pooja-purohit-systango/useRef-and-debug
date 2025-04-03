import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Assignment1 from "./components/Assignment1";
import ParentScrolling from "./components/Assignment-2/ParentScrolling";

const App = () => {
  return (
    <Router>
          <div><Link to="/task-1">Task 1</Link></div>
          <div><Link to="/task-2">Task 2</Link></div>


      <Routes>
        <Route path="/task-1" element={<Assignment1 />} />
        <Route path="/task-2" element={<ParentScrolling />} />
      </Routes>
    </Router>
  );
};

export default App;
