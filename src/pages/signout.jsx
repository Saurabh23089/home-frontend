import supabase from '../supabase/supabaseClient.jsx';
import { useNavigate } from 'react-router-dom';

const Signout = () => {

    const navigate = useNavigate();


    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.log('Error during sign out:', error.message);
        } else {
          console.log("user logged out");
          navigate('/login'); 
        }
      }

    return (
        <>
    <button className='dark:text-black' onClick={handleSignOut}>Log out</button>
    </>
    )
}

export default Signout;