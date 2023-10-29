import { CustomerData } from '../customer/customer.type';
import { ModelData } from '../model/model.type';

export interface VehicleData {
  id: number;
  licensePlate: string;
  customer: CustomerData;
  model: ModelData;
}
