import './App.css';
import Sidebar from './components/Sidebar';
import Invoice from './components/Invoice';
import Product from './components/Product';
import Report from './components/Report';

import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Sidebar />
    <Routes>
        <Route path="/" element={<Invoice/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/report" element={<Report/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
