export interface JobRequest {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'Medium' | 'High' | 'Low';
  dueDate: string;
  estValue: string;
}

export interface SelectedCell {
  row: number;
  col: string;
}

export type TabType = 'All Orders' | 'Pending' | 'Reviewed' | 'Arrived';

export type ActionType = 
  | 'Hide fields'
  | 'Sort'
  | 'Filter'
  | 'Cell view'
  | 'Import'
  | 'Export'
  | 'Share'
  | 'New Action'
  | 'Add tab';