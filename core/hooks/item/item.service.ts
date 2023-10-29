import api from '@/core/config/axios';
import { ItemData, ItemRequest } from './item.type';

export async function getItems() {
  const result = (await api.get('/item/items')).data as unknown;
  return result as ItemData[];
}

export async function createItem(data: ItemRequest) {
  const result = (await api.post('/item/', data)).data as unknown;
  return result as ItemData;
}
