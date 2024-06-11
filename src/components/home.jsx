import { useNavigate } from 'react-router-dom';
import Partone from './partone'

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen ">

          <div className='flex justify-between'>
          <div className='mx-12'>
                <h1 className="text-left mt-4 text-4xl mb-2">Tailwind CSS Sidebar Layouts</h1>
                <p className="text-left">Sidebar application layout examples for Tailwind CSS, designed and built by the creators of the framework.</p>
            </div>
            <button className='mx-12 bg-[#468954] h-12 px-4 my-8 rounded-xl' onClick={() => {navigate('/logout')}}>Logout</button>
          </div>
            


            <div className=''>
                <Partone />
            </div>

            

        </div>
    )
}

export default Home;