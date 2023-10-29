import { useMutation, useQuery, useQueryClient } from 'react-query';
import { notifications } from '@mantine/notifications';
import { createWorkorder, getWorkOrder } from './workorder.service';

export function useWorkorder() {
  const query = useQuery(['workorder'], getWorkOrder);
  return query;
}

export function useCreateWorkorder() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createWorkorder, {
    onSuccess(data) {
      queryClient.invalidateQueries(['workorder']);
      notifications.show({
        title: 'Orçamento criado com sucesso',
        message: `O orçamento ${data.id} foi criado com sucesso.`,
      });
    },
  });
  return mutation;
}
