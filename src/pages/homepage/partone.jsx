import bgimage from '../../assets/bgimage.jpg';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import { useState } from 'react';

const PartOne = () => {

    const [sidebar,setsidebar] = useState(false);

    return (
        <div className="flex overflow-hidden border-2 rounded-lg mx-8 mt-2 mb-8 h-[800px]">
        <Sidebar sidebar={sidebar} setsidebar={setsidebar} />
        <div className="flex flex-col w-full lg:w-2/3">
          <Header sidebar={sidebar} setsidebar={setsidebar} />
          <div className="m-8 overflow-hidden relative flex-grow h-full">
            <img src={bgimage} alt="background" className='object-cover h-full w-full' />
          </div>
        </div>
      </div> 
    )
  
};

export default PartOne;
