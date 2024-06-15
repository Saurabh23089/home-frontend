import { useEffect, useState } from 'react';
import Home from './pages/homepage/home';
import Login from './pages/login';
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signout from './pages/signout';
import supabase from './supabase/supabaseClient';
import Signup from './pages/signup';
import Tables from './pages/table/table.jsx';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);

      if (session && session.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();

          // console.log(profile);

          if (!profile) {
            const { user } = session;
            await supabase
              .from('profiles')
              .insert([{ id: user.id, firstname: user.user_metadata.firstname, lastname: user.user_metadata.lastname, email: user.email }]);
          }
      }  

    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const renderProtectedRoute = (Component) => {
    if (loading) {
      return <div>Loading...</div>; // Show loading indicator while checking session
    }
    return session ? <Component /> : <Navigate to='/login' />;
  };

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Signout />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/" element={renderProtectedRoute(Tables)} />
      </Routes>
    </Router>
  );
}

export default App;
