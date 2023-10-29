'use client';

import { ActionIcon, Button, Card, Group, Input, Modal, Stack, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';
import { useCreateModel, useModels } from '@/core/hooks/model/model.hook';

export default function Model() {
  const [openModal, setOpenModal] = useToggle();
  const { data } = useModels();
  const { mutateAsync } = useCreateModel();
  const { reset, getInputProps, onSubmit } = useForm<{ name: string }>();

  const handleCreateModel = (modelData: { name: string }) => {
    mutateAsync(modelData);
    setOpenModal();
    reset();
  };
  return (
    <Group>
      <Group justify="space-between" w="100%">
        <Title>Modelos</Title>
        <Button onClick={() => setOpenModal()}>Novo modelo</Button>
      </Group>
      {data.map(({ name }: { name: string }, index: number) => (
        <Card key={index} w="100%">
          <Group justify="space-between">
            <Text>{name}</Text>
            <ActionIcon color="red">
              <IconTrash />
            </ActionIcon>
          </Group>
        </Card>
      ))}
      <Modal opened={openModal} onClose={setOpenModal} title="Criar modelo">
        <form onSubmit={onSubmit(handleCreateModel)}>
          <Stack>
            <Input placeholder="Nome do modelo" {...getInputProps('name')} />
            <Group justify="end">
              <Button type="submit">Salvar</Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </Group>
  );
}
