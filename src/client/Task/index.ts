import Crypto from 'crypto-js';
import { Task, BackEndItem } from '../types/Task';

export const TaskAdapter = {
  toFrontEnd({id, type, taskDetail, reportDetail, ...task}:BackEndItem): Task {
    const hash = Crypto.HmacSHA1(id, type).toString();
    return {
      ...task,
      id, 
      type,
      hash,
      detail: (taskDetail || reportDetail),
    }
  },

  toBackEnd({hash, detail, ...task}: Task): BackEndItem {
    const ttype = task.type.toLowerCase(); 
    return {
      ...task,
      [`${ttype}Detail`]: detail,
    } as BackEndItem;
  },
};