import api from '@/core/config/axios';
import { ModelData } from './model.type';

export async function getModels() {
  const result = (await api.get('/model/models')).data as unknown;
  return result as ModelData[];
}

export async function createModel(data: { name: string }) {
  const result = await api.post('/model/', data);
  return result.data;
}
