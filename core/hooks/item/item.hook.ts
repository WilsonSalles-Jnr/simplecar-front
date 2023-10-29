import { useMutation, useQuery, useQueryClient } from 'react-query';
import { notifications } from '@mantine/notifications';
import { createItem, getItems } from './item.service';

export function useItems() {
  const query = useQuery(['items'], getItems);
  return query;
}

export function useCreateItem() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createItem, {
    onSuccess(data) {
      queryClient.invalidateQueries(['items']);
      notifications.show({
        title: 'Modelo criado com sucesso',
        message: `O item ${data.name} foi criado com sucesso.`,
      });
    },
  });
  return mutation;
}
