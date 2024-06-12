import bgimage from '../../assets/bgimage.jpg';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';

const PartOne = () => (
  <div className="flex overflow-hidden border-2 rounded-lg mx-8 mt-2 mb-8 h-[800px]">
    <Sidebar />
    <div className="flex flex-col w-2/3">
      <Header />
      <div className="m-8 overflow-hidden relative flex-grow">
        <img src={bgimage} alt="background" />
      </div>
    </div>
  </div>
);

export default PartOne;
