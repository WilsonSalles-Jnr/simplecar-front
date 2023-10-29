import api from '@/core/config/axios';
import { WorkOrderData, WorkorderRequest } from './workorder.type';

export async function getWorkOrder() {
  const result = (await api.get('/workorder/workorders')).data as unknown;
  return result as WorkOrderData[];
}

export async function createWorkorder(data: WorkorderRequest) {
  const result = (await api.post('/workorder/', data)).data as unknown;
  return result as WorkOrderData;
}
