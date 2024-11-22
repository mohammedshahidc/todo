
import './App.css';
import Input from './Input';
import { Route,Routes } from 'react-router-dom';
import Detailes from './Detailes';
import Compleeted from './Compleeted';
function App() {
  return (
    <div className="App">
     <Input/>
     <Routes>
    <Route path='/detaile/:id' element={<Detailes/>} />
    <Route path='/completed' element={<Compleeted/>} />
     </Routes>
    </div>
  );
}

export default App;
