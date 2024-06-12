import { useNavigate } from 'react-router-dom';
import Partone from './partone'

const Home = () => {

    const navigate = useNavigate();

    return (

        <>

            <div className='flex justify-between items-center mb-8 mx-24'>
                <div className=''>
                    <h1 className="text-left mt-4 text-4xl mb-2">Tailwind CSS Sidebar Layouts</h1>
                    <p className="text-left">Sidebar application layout examples for Tailwind CSS, designed and built by the creators of the framework.</p>
                </div>
                <button className='bg-[#468954] h-12 px-4 my-8 rounded-xl' onClick={() => { navigate('/logout') }}>Logout</button>
            </div>




            <div className="flex flex-col justify-center items-center ">
                <div className='w-11/12 '>
                    <Partone />
                </div>
            </div>
        </>









    )
}

export default Home;

{/* <div className=''>
                <p className='inline-flex gap-2 text-sm'>Brand Sidebar with header
                    <p className='px-4 bg-[#f1f5f9] rounded-lg py-1'>Preview</p>
                </p>
                <p className='inline-flex gap-2 text-[#53c0f4]'>Get the Code
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </p>
            </div> */}