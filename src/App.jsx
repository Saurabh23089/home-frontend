import { useEffect, useState } from 'react'
import Home from './pages/homepage/home';
import Login from './pages/login';
import {
	Navigate,
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"
import Signout from './pages/signout';
import supabase from './supabase/supabaseClient';


function App() {

  const [session, setsession] = useState(true);

  useEffect(() => {
    const getsession = async () => {
      const currentsession = await supabase.auth.getSession()
      console.log(currentsession);
      setsession(currentsession);
    }

    getsession();
  },[])

  const renderProtectedRoute = (Component) => {
    return session ? <Component /> : <Navigate to='/login' />
  }


  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/logout'
          element={<Signout />}
        />

        <Route
        path="/"
        element={renderProtectedRoute(Home)}
        />

      </Routes>
    </Router>
  )
}

export default App
