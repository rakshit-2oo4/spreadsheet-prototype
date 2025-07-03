import React, { useState, useRef, useEffect } from 'react';
import { JobRequest, SelectedCell } from '../types';
import { getStatusColor, getPriorityColor } from '../utils/styles';
import { BriefcaseBusiness, CalendarDays, CircleChevronDown, UserRound  } from 'lucide-react';
import  Globe from '../assets/Globe.svg' ;
import  Emoji from '../assets/Emoji.svg' ;

interface SpreadsheetTableProps {
  data: JobRequest[];
}

const SpreadsheetTable: React.FC<SpreadsheetTableProps> = ({ data }) => {
  const [selectedCell, setSelectedCell] = useState<SelectedCell | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const handleCellClick = (rowIndex: number, colKey: keyof JobRequest): void => {
    setSelectedCell({ row: rowIndex, col: colKey });
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (!selectedCell) return;

    const { row, col } = selectedCell;
    const columns: (keyof JobRequest)[] = [
      'id',
      'jobRequest',
      'submitted',
      'status',
      'submitter',
      'url',
      'assigned',
      'priority',
      'dueDate',
      'estValue',
    ];
    const currentColIndex = columns.indexOf(col);

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        if (row > 0) setSelectedCell({ row: row - 1, col });
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (row < data.length - 1) setSelectedCell({ row: row + 1, col });
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (currentColIndex > 0)
          setSelectedCell({ row, col: columns[currentColIndex - 1] });
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (currentColIndex < columns.length - 1)
          setSelectedCell({ row, col: columns[currentColIndex + 1] });
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (tableRef.current && !tableRef.current.contains(e.target as Node)) {
        setSelectedCell(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCellClassName = (
    rowIndex: number,
    colKey: keyof JobRequest,
    baseClass: string = ''
  ): string => {
    const isSelected =
      selectedCell?.row === rowIndex && selectedCell?.col === colKey;
    return `${baseClass} cursor-pointer transition-cell ${
      isSelected ? 'bg-blue-100 ring-2 ring-blue-500' : ''
    }`;
  };

  const renderEmptyRows = (): JSX.Element[] => {
    return Array.from({ length: 15 }, (_, i) => (
      <tr key={`empty-${i}`} className="hover:bg-gray-50">
        <td className="px-4 py-3 text-sm text-gray-400">
          {data.length + i + 1}
        </td>
        {Array.from({ length: 9 }, (_, j) => (
          <td key={j} className="px-4 py-3 text-sm"></td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="flex-1 border">
      <div
        ref={tableRef}
        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="overflow-x-auto border">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr className='h-[32px]'>
                <th className="w-[32px] pr-[4px] pl-[16px] gap-[4px] text-left text-base font-medium text-gray-500 uppercase">
                  #
                </th>
                <th className="w-[256px] px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-80">
                  <div className="flex items-center space-x-1">
                    <BriefcaseBusiness  className='w-[16px] h-[16px] text-gray-500' />
                    <span>&nbsp;Job Request</span>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-32">
                  <div className="flex items-center space-x-1">
                    <CalendarDays className='w-[16px] h-[16px] text-gray-500' />
                    <span>Submitted</span>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-32">
                  <div className="flex items-center space-x-1">
                    <CircleChevronDown className='w-[16px] h-[16px] text-gray-500' />
                    <span>Status</span>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-32">
                  <div className="flex items-center space-x-1">
                    <UserRound className='w-[16px] h-[16px] text-gray-500'/>
                    <span>Submitter</span>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-32">
                  <div className="flex items-center space-x-1">
                    <img src={Globe} alt='globe' className='w-[16px] h-[16px] text-gray-500'/>
                    <span>URL</span>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-32">
                  <div className="flex items-center space-x-1">
                    <img src={Emoji} alt='emoji' className='w-[16px] h-[16px] text-gray-500'/>
                    <span> Assigned</span>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-24">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-32">
                  Due Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase min-w-32">
                  Est. Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((row, rowIndex) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-500">{row.id}</td>
                  <td
                    className={getCellClassName(
                      rowIndex,
                      'jobRequest',
                      'px-4 py-3 text-sm text-gray-900 w-[240px] h-[16px]'
                    )}
                    onClick={() => handleCellClick(rowIndex, 'jobRequest')}
                  >
                    {row.jobRequest}
                  </td>
                  <td
                    className={getCellClassName(
                      rowIndex,
                      'submitted',
                      'px-4 py-3 text-sm text-gray-500'
                    )}
                    onClick={() => handleCellClick(rowIndex, 'submitted')}
                  >
                    {row.submitted}
                  </td>
                  <td
                    className={getCellClassName(rowIndex, 'status', 'px-4 py-3')}
                    onClick={() => handleCellClick(rowIndex, 'status')}
                  >
                    <span
                      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td
                    className={getCellClassName(
                      rowIndex,
                      'submitter',
                      'px-4 py-3 text-sm text-gray-900'
                    )}
                    onClick={() => handleCellClick(rowIndex, 'submitter')}
                  >
                    {row.submitter}
                  </td>
                  <td
                    className={getCellClassName(
                      rowIndex,
                      'url',
                      'px-4 py-3 text-sm text-blue-600 underline'
                    )}
                    onClick={() => handleCellClick(rowIndex, 'url')}
                  >
                    {row.url}
                  </td>
                  <td
                    className={getCellClassName(
                      rowIndex,
                      'assigned',
                      'px-4 py-3 text-sm text-gray-900'
                    )}
                    onClick={() => handleCellClick(rowIndex, 'assigned')}
                  >
                    {row.assigned}
                  </td>
                  <td
                    className={getCellClassName(rowIndex, 'priority', 'px-4 py-3')}
                    onClick={() => handleCellClick(rowIndex, 'priority')}
                  >
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getPriorityColor(
                        row.priority
                      )}`}
                    >
                      {row.priority}
                    </span>
                  </td>
                  <td
                    className={getCellClassName(
                      rowIndex,
                      'dueDate',
                      'px-4 py-3 text-sm text-gray-500'
                    )}
                    onClick={() => handleCellClick(rowIndex, 'dueDate')}
                  >
                    {row.dueDate}
                  </td>
                  <td
                    className={getCellClassName(
                      rowIndex,
                      'estValue',
                      'px-4 py-3 text-sm text-gray-900'
                    )}
                    onClick={() => handleCellClick(rowIndex, 'estValue')}
                  >
                    {row.estValue}
                  </td>
                </tr>
              ))}
              {renderEmptyRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetTable;