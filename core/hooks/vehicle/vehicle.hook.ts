import { notifications } from '@mantine/notifications';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createVehicle, getVehicles } from './vehicle.service';

export function useVehicles() {
  const query = useQuery(['vehicle'], getVehicles);
  return query;
}

export function useCreateVehicle() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createVehicle, {
    onSuccess(data: { licensePlate: string }) {
      queryClient.invalidateQueries(['vehicle']);
      notifications.show({
        title: 'Veículo criado com sucesso',
        message: `O veículo com a placa ${data.licensePlate} foi criado com sucesso.`,
      });
    },
  });
  return mutation;
}
