import React from 'react';
import {
  ChevronsRight,
  EyeOff,
  ArrowUpDown,
  ListFilter ,
  ArrowDownFromLine ,
  ArrowUpToLine ,
} from 'lucide-react';
import { ActionType } from '../types';
import  Shapes from '../assets/Shape.svg';
import ArrowSplit from '../assets/Arrow Split.svg';
import cell from '../assets/cell.svg';

interface ToolbarProps {
  onActionClick: (action: ActionType) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onActionClick }) => {
  return (
    <div className="bg-white border-b border-gray-200 px-[8px] py-[6px]">
      <div className="flex items-center justify-between p-[8px]">
        <div className="flex items-center gap-[8px]">
          <span className="text-sm font-medium">Tool bar</span>
          <ChevronsRight  className="w-[16px] h-[16px] text-black" />
          <p className='text-gray-200 mx-[4px]'>|</p>
          <button
            onClick={() => onActionClick('Hide fields')}
            className="flex items-center text-sm text-black mx-[8px]"
          >
            <EyeOff className="w-[20px] h-[20px]" />
            <span>&nbsp;Hide fields </span>
          </button>
          <button
            onClick={() => onActionClick('Sort')}
            className="flex items-center text-sm text-black mx-[8px]"
          >
            <ArrowUpDown className="w-[20px] h-[20px]" />
            <span>&nbsp;Sort </span>
          </button>
          <button
            onClick={() => onActionClick('Filter')}
            className="flex items-center text-sm text-black mx-[8px]"
          >
            <ListFilter  className="w-[20px] h-[20px]" />
            <span>&nbsp;Filter </span>
          </button>
          <button
            onClick={() => onActionClick('Cell view')}
            className="flex items-center text-sm text-black mx-[8px]"
          >
            <img src={cell} className="w-[20px] h-[20px]" />
            <span>&nbsp;Cell view </span>
          </button>
        </div>
        <div className="flex items-center gap-[8px]">
          <button
            onClick={() => onActionClick('Import')}
            className="flex items-center text-sm text-black border px-[12px] py-[8px] gap-[4px] rounded-md"
          >
            <ArrowDownFromLine  className="w-[20px] h-[20px]" />
            <span>Import</span>
          </button>
          <button
            onClick={() => onActionClick('Export')}
            className="flex items-center text-sm text-black border px-[12px] py-[8px] gap-[4px] rounded-md"
          >
            <ArrowUpToLine  className="w-[20px] h-[20px]" />
            <span>Export</span>
          </button>
          <button
            onClick={() => onActionClick('Share')}
            className="flex items-center text-sm text-black border px-[12px] py-[8px] gap-[4px] rounded-md"
          >
            <img src={Shapes} className="w-[20px] h-[20px]" />
            <span>Share</span>
          </button>
          <button
            onClick={() => onActionClick('New Action')}
            className="bg-[#4B6A4F] text-white px-[24px] py-[8px] rounded-md text-sm flex items-center border"
          >
            <img src={ArrowSplit} className="w-[20px] h-[20px]" />
            <span>&nbsp;New Action</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;