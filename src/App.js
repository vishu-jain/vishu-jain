import './App.css';
import Signupform from './Signupform';
import Getdata from './Getdata';
import {Route,Routes,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Signupform/>
        <Routes>
       <Route path="/get" element={<Getdata/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
