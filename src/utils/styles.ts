export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'In-process':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Need to start':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Complete':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Blocked':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'High':
      return 'text-[#EF4D44]';
    case 'Medium':
      return 'text-[#C29210]';
    case 'Low':
      return 'text-[#1A8CFF]';
    default:
      return 'text-gray-800';
  }
};

export const getCellClass = (
  isSelected: boolean,
  baseClass: string = 'px-4 py-3 cursor-pointer'
): string => {
  return `${baseClass} ${
    isSelected ? 'bg-blue-100 ring-2 ring-blue-500' : ''
  }`;
};