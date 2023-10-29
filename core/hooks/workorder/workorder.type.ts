import { ItemData } from '../item/item.type';
import { VehicleData } from '../vehicle/vehicle.type';

export interface WorkorderRequest {
  status: 'OPEN' | 'AUTHORIZED' | 'FINISHED' | 'CANCELED';
  itemIds: number[];
  vehicleId: number;
  smashed: boolean;
  scratrched: boolean;
  brokenGlass: boolean;
  hole: boolean;
  observation: string;
}

export interface WorkOrderData {
  id: number;
  status: 'OPEN' | 'AUTHORIZED' | 'FINISHED' | 'CANCELED';
  item: ItemData[];
  vehicle: VehicleData;
  smashed: boolean;
  scratrched: boolean;
  brokenGlass: boolean;
  hole: boolean;
  observation: string;
}
