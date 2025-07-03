import { JobRequest } from '../types';

export const mockData: JobRequest[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for product XYZ",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Asha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000"
  },
  {
    id: 2,
    jobRequest: "Update press kit for Q4 quarterly briefing",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Eric Chen",
    url: "www.irfankhanportfolio.com",
    assigned: "Reas Rachid",
    priority: "High",
    dueDate: "05-11-2024",
    estValue: "3,500,000"
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app update",
    submitted: "06-10-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnsondesigns.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000"
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreenart.com",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000"
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrowncreative.com",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000"
  }
];