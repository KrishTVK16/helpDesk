
export enum TicketStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  PENDING = 'Pending',
  RESOLVED = 'Resolved',
  CLOSED = 'Closed'
}

export enum TicketPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  URGENT = 'Urgent'
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: string;
  userId: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
  aiSuggestion?: string;
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface DashboardStats {
  total: number;
  open: number;
  resolved: number;
  avgResponseTime: string;
}
