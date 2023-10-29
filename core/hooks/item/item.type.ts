import { ModelData } from '../model/model.type';

export interface ItemRequest {
  name: string;
  description: string;
  type: 'PART' | 'SERVICE';
  modelIds: number[];
}

export interface ItemData {
  id: number;
  name: string;
  description?: string;
  type: 'PART' | 'SERVICE';
  models: ModelData;
}
