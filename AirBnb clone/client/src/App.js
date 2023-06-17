import './App.css';
import Headers from './componenet/pages/Headers';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./componenet/pages/Login"
import Register from './componenet/pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
