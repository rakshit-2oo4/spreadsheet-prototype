import React from 'react';
import { Plus, Ellipsis } from 'lucide-react';
import { ActionType } from '../types';
import ArrowSplit from '../assets/Arrow Split.svg';
import Action from '../assets/Action.svg';
import Link from '../assets/Link.svg';

interface ActionTabsProps {
  onActionClick: (action: ActionType) => void;
}

const ActionTabs: React.FC<ActionTabsProps> = ({ onActionClick }) => {
  return (
    <div className='flex items-center ml-[40px]'>
      <div onClick={() => onActionClick('Add tab')}
        className='bg-[#E2E2E2] text-black grid grid-cols-4 gap-[16px] items-center'>
        <div className='flex items-center gap-[8px]'>
          <img src={Link} alt='Link' className='w-[16px] h-[16px] mt-[5px]' />
          <p>Q3 Financial Overview</p>
        </div>
        <img src={Action} alt='action' className='w-[16px] h-[16px] mt-[5px] mr-[0px] pr-[0px] grid justify-items-end' />
      </div>
      <div className='ml-[250px]'>
        <div className='flex items-center'>
          <div onClick={() => onActionClick('Add tab')}
            className='bg-[#D2E0D4] text-black grid grid-cols-5 space-x-[2px] border'>
            <img src={ArrowSplit} alt='arrowSplit' />
            <p>ABC</p>
            <Ellipsis />
          </div>
          <div onClick={() => onActionClick('Add tab')}
            className='bg-[#DCCFFC] border text-black grid-cols-10 flex align-items-center w-[210px] gap-[4px]'>
            <img src={ArrowSplit} alt='arrowSplit' />
            <p>Answer a question</p>
            <Ellipsis />
          </div>
          <div onClick={() => onActionClick('Add tab')}
            className='bg-[#FAC2AF] text-black w-[105px] border flex align-items-center gap-[4px]'>
            <img src={ArrowSplit} alt='arrowSplit' />
            <p>Extract</p>
          </div>
          <button
            onClick={() => onActionClick('Add tab')}
            className="border-2 border-dashed border-gray-300 rounded flex items-center justify-center w-[50px]"
          >
            <Plus className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionTabs;