import { useContext } from 'react';
import '../css/App.css';
import Login from './Login/Login';
import { AuthContext } from '../context/AuthContext';
import Listado from './Listado/Listado';

function App() {
  const { userInfo} = useContext
  (AuthContext)

  
  return (
    <div className="container mt-5">
      {userInfo.name ? <Listado></Listado>:<Login></Login>}
      
    </div>

  );
}

export default App;
