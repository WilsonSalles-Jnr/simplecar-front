import api from '@/core/config/axios';
import { VehicleData } from './vehicle.type';

export async function getVehicles() {
  const result = (await api.get('/vehicle/vehicles')).data as unknown;
  return result as VehicleData[];
}

export async function createVehicle(data: {
  licensePlate: string;
  customerId: number;
  modelId: number;
}) {
  const obj = {
    licensePlate: data.licensePlate,
    customer: {
      id: data.customerId,
    },
    model: {
      id: data.modelId,
    },
  };
  const result = (await api.post('/vehicle/', obj)).data as unknown;
  return result as VehicleData;
}
