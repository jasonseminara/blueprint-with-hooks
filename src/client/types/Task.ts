export enum TaskType {
  Report = 'REPORT',
  Task = 'TASK'
}

export interface TaskDetail {
  name: string;
  owner: string;
  dueDate: Date;
}
export interface ReportDetail {
  name: string;
  schedule: boolean;
  start: Date;
}

export interface BaseTask {
  id: string;
  type: TaskType;
}

export interface BackEndReport extends BaseTask {
  reportDetail;
}

export interface BackEndTask extends BaseTask {
  taskDetail;
}

export interface Task extends BaseTask {
  detail: TaskDetail | ReportDetail;
  hash: string;
}

export type BackEndItem = BackEndReport & BackEndTask;
