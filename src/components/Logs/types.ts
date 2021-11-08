export type LogStatus = 'normal' | 'success' | 'failure' | 'idle';

export interface Log {
  timestamp: string;
  content: string;
  variant: LogStatus;
}

export interface IProps {
  logs: Log[];
}
