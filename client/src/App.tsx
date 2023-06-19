import Login from './Components/Views/Login';
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Profile from './Components/Views/Profile';
import ProfileDetails from './Components/Views/ProfileDetails';
// import PrivateRoutes from './Components/Routes/PrivateRoutes';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile-details' element={<ProfileDetails/>}/>
        {/* <Route
          path="/profile-details"
          element={<PrivateRoutes Component={ProfileDetails} />}
        /> */}
     </Routes>
    </div>
  );
}

export default App;
