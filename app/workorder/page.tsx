'use client';

import { ActionIcon, Button, Card, Group, Modal, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';
import { WorkorderRequest } from '@/core/hooks/workorder/workorder.type';
import { useCreateWorkorder, useWorkorder } from '@/core/hooks/workorder/workorder.hook';
import WorkorderModalForm from '@/components/workorder/WorkorderModalForm';

export default function Workorder() {
  const { reset, getInputProps, onSubmit } = useForm<WorkorderRequest>();
  const [modal, setModal] = useToggle();
  const { data } = useWorkorder();
  const { mutateAsync } = useCreateWorkorder();

  const handleCreate = (workorder: WorkorderRequest) => {
    mutateAsync(workorder);
    reset();
    setModal();
  };

  const statusTranslate = {
    OPEN: 'Aberto',
    AUTHORIZED: 'Autorizado',
    FINISHED: 'Finalizado',
    CANCELED: 'Cancelado',
  };

  return (
    <Group w="100%">
      <Group justify="space-between" w="100%">
        <Title>Orçamentos</Title>
        <Button onClick={() => setModal()}>Novo orçamento</Button>
      </Group>
      {data?.map(({ status, vehicle, id }) => (
        <Card w="100%" key={id}>
          <Group justify="space-between">
            <Text>{id}</Text>
            <Text>{statusTranslate[status]}</Text>
            <Text>{`${vehicle.licensePlate} - ${vehicle.model.name}`}</Text>
            <ActionIcon color="red">
              <IconTrash />
            </ActionIcon>
          </Group>
        </Card>
      ))}
      <Modal opened={modal} onClose={setModal} title="Novo orçamento">
        <form onSubmit={onSubmit(handleCreate)}>
          <WorkorderModalForm getInputProps={getInputProps} />
        </form>
      </Modal>
    </Group>
  );
}
