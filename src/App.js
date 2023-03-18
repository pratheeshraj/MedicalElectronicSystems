
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import EnterName from './component/home/Entername/EnterName';
import Home from './component/home/Home';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route element={<Home/>} path="/" />
  </Routes>
  <Routes>
  <Route element={<EnterName/>} path="/EnterName" />
  </Routes>

  </BrowserRouter>
    </div>
  );
}

export default App;
