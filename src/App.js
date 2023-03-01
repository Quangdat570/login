import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { RequireToken } from "./Auth";

import Landing from "./Landing";







function App() {
  
  return (
    <div className ="App">
    <Routes>
     
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/profile" element = {<Home/>}/>
     
      <Route
      path="/profile"
      element={
        <RequireToken>
          <Landing />
        </RequireToken>
      }
    />
     
      
    </Routes>
   
    </div>
  );
}

export default App;
