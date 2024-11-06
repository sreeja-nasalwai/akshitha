
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import FooterComponent from './Components/FooterComponent';
import LoginComponent from './Components/LoginComponent';
import SignComponent from './Components/SignComponent';
import HomeComponent from './Components/HomeComponent';
import HeaderComponent from './Components/HeaderComponent';
import AdminComponent from './Components/AdminComponent';
import LogoutComponent from './Components/LogoutComponent';
function App() {
  return (
    <BrowserRouter>

   <HeaderComponent/>
    <Routes>
      <Route path="/sign"  element={<SignComponent/>}/>
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/admin" element={<AdminComponent/>}/>
      <Route path="/home" element={<HomeComponent />} />
      <Route path="/logout" element={<LogoutComponent/>}/>
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
