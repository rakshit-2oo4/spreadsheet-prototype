import React from 'react';
import { Plus } from 'lucide-react';
const BottomTabs: React.FC = () => {
    return(
        <div className="h-[48x]py-[4px] px-[16px] bg-white border-2 border-b flex items-center">
            <div className="w-[111px] bg-[#E8F0E9] text-black flex items-center border-2 border-b border-t-black gap-[8px] px-[16px] py-[10px] ml-[15px]">
                <p><b>All Orders</b></p>
            </div>
            <div className="w-[94px] py-[4px] px-[16px] bg-white text-[#757575] flex items-center justify-between">
                <p>Pending</p>
            </div>
            <div className="w-[107px] py-[4px] px-[16px] bg-white text-[#757575] flex items-center justify-between">
                <p>Reviewed</p>
            </div>
            <div className="w-[89px] py-[4px] px-[16px] bg-white text-[#757575] flex items-center justify-between">
                <p>Arrived</p>
            </div>
            <Plus className='w-[36px] h-[44px] px-[4px] py-[8px] text-[#757575]'/>
        </div>
    )
}

export default BottomTabs