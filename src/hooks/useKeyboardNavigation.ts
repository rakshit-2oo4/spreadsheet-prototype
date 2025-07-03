import { useCallback } from 'react';
import { SelectedCell } from '../types';

interface UseKeyboardNavigationProps {
  selectedCell: SelectedCell | null;
  setSelectedCell: (cell: SelectedCell | null) => void;
  dataLength: number;
}

export const useKeyboardNavigation = ({
  selectedCell,
  setSelectedCell,
  dataLength,
}: UseKeyboardNavigationProps) => {
  const columns = [
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

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!selectedCell) return;

      const { row, col } = selectedCell;
      const currentColIndex = columns.indexOf(col);

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          if (row > 0) setSelectedCell({ row: row - 1, col });
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (row < dataLength - 1) setSelectedCell({ row: row + 1, col });
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
        case 'Escape':
          e.preventDefault();
          setSelectedCell(null);
          break;
      }
    },
    [selectedCell, setSelectedCell, dataLength, columns]
  );

  return { handleKeyDown, columns };
};