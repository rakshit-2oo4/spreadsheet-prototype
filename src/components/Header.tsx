import React from 'react';
import Panel from '../assets/panel.svg';
import { Search, ChevronRight} from 'lucide-react';
import Notification_bell from '../assets/notification_bell.svg';
import photo from '../assets/756f38a6ef8725586111b428053d87fea711b57d.png';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between border text-gray-600 px-[16px] py-[8px] mx-[8px]">
      <div className="flex items-center gap-[16px]">
          <div className='h-[24px] w-[24px] flex items-center'>
            <img src={Panel} alt="Logo" className="h-8 w-auto" />
          </div>
          <div className='flex items-center text-sm font-medium gap-[4px] text-gray-400'>
            <p>Workspace</p>
            <ChevronRight className='h-[12px] w-[12px]'/>
            <p>Folder 2</p>
            <ChevronRight className='h-[12px] w-[12px]'/>
            <p className='text-black'>Spreadsheet 3</p>
          </div>
      </div>
      <div className="flex justify-center items-center h-[40px] w-[325px] ">
        <div className="h-[40px] w-[165px] border border-gray-300 rounded-md flex items-center">
          <Search className="w-[24px] h-[24px] transform -translate-y-1/2 text-black z-10" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="flex h-[40px] w-[165px] items-center border border-gray-300 rounded-md text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="h-[40px] w-[40px] flex items-center justify-center">
          <img src={Notification_bell} alt="Notification Bell" className='w-[40px] h-[40px]'/>
        </div>
        <div className="flex items-center h-[40px] w-[112px]">
          <div className="w-[28px] h-[28px] bg-blue-500 rounded-full flex items-center justify-center mr-[4px]">
            <img className='rounded-full' src={photo}/>
          </div>
          <div>
            <div className="text-sm font-medium">John Doe</div>
            <div className="text-xs text-gray-500">@johndoe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;