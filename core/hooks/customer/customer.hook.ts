import { useMutation, useQuery, useQueryClient } from 'react-query';
import { notifications } from '@mantine/notifications';
import { createCustomer, getCustomers } from './customer.service';

export function useCustomers() {
  const query = useQuery(['customers'], getCustomers);

  return query;
}

export function useCreateCustomer() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createCustomer, {
    onSuccess(data: { id: number; name: string; phone: string }) {
      queryClient.invalidateQueries(['customers']);
      notifications.show({
        title: 'Cliente criado com sucesso',
        message: `cliente ${data.name} criado com sucesso`,
        color: 'green',
      });
    },
  });

  return mutation;
}
