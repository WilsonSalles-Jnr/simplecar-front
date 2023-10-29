import { useMutation, useQuery, useQueryClient } from 'react-query';
import { notifications } from '@mantine/notifications';
import { createModel, getModels } from './model.service';

export function useModels() {
  const query = useQuery(['models'], getModels);
  return query;
}

export function useCreateModel() {
  const queryClient = useQueryClient();
  const mutation = useMutation(createModel, {
    onSuccess(data: { name: string }) {
      queryClient.invalidateQueries(['models']);
      notifications.show({
        title: 'Modelo criado com sucesso',
        message: `O modelo ${data.name} foi criado com sucesso.`,
      });
    },
  });
  return mutation;
}
